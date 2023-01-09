import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPurchaseOrder, getPurchaseOrder, getProduct, updateProduct } from '../../assets/firebase';
import { useCartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";


const Checkout = () => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const {totalPrice, cart, emptyCart} = useCartContext()
    const formFields = React.useRef()
    let navigate = useNavigate()

    const onSubmit = () => {
        const dataForm = new FormData(formFields.current)
        const client = Object.fromEntries(dataForm)
       
        const aux = [...cart]

        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodDB => {
                if(prodDB.stock >= prodCart.qty) {
                    prodDB.stock -= prodCart.qty
                    updateProduct(prodCart.id, prodDB)

                } else {
                    toast.error(`El producto ${prodDB.model} no posee stock suficiente`)
                    emptyCart()
                }
            })
        })

        createPurchaseOrder(client,totalPrice(), new Date().toISOString()).then(purchaseOrder => {
            getPurchaseOrder(purchaseOrder.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
                emptyCart()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
            })
            
        })
        
    }


    
    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} ref={formFields}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" {...register('nombre',{
                         required: true,
                    })} />
                      {errors.nombre?.type === 'required' && <p className="errorMsg">El campo nombre es requerido</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"  {...register('email',{
                         required: true,
                         pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    })} />
                      {errors.email?.type === 'required' && <p className="errorMsg">El campo email es requerido</p>}
                      {errors.email?.type === 'pattern' && <p className="errorMsg">El formato del email es incorrecto</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" {...register('email2',{
                         required: true,
                         validate: value => (value === getValues().email),
                    })} />
                      {errors.email2?.type === 'required' && <p className="errorMsg">El campo repetir email es requerido</p>}
                      {errors.email2 && <p className="errorMsg">No coincide con el email ingresado</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" {...register('dni',{
                         required: true,
                         minLength: 8,
                         maxLength: 8,
                    })} />
                      {errors.dni?.type === 'required' && <p className="errorMsg">El campo nombre es requerido</p>}
                      {errors.dni && <p className="errorMsg">El campo DNI debe tener 10 caracteres numericos</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="celular"{...register('celular',{
                         required: true,
                         minLength: 10,
                         maxLength: 10,
                    })} />
                      {errors.celular?.type === 'required' && <p className="errorMsg">El campo nombre es requerido</p>}
                      {errors.celular && <p className="errorMsg">El campo Celular debe tener 10 caracteres numericos</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" {...register('direccion',{
                         required: true,
                    })} />
                      {errors.direccion?.type === 'required' && <p className="errorMsg">El campo Dirección es requerido</p>}
                </div>
                <button type="submit" className="btn btnFinish btn-success">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;