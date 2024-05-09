import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "bootstrap/dist/css/bootstrap.min.css"

const Feedback = () => {

    const [state, handleSubmit] = useForm("myyrvglo");
    if (state.succeeded) {
        return <p>Thanks for you Feedback!</p>;
    }

    return (
        <>

            <div className='text-center'>
                <h2>We would Love to here From You!</h2>
            </div>

            <form class="row g-3 m-5 p-4 border border-secondary" onSubmit={handleSubmit}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">First Name</label>
                    <input type="text" name="FirstName" class="form-control" id="inputEmail4" placeholder='John' />
                    <ValidationError
                        prefix="Email"
                        field="FirstName"
                        errors={state.errors}
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Second Name</label>
                    <input type="text" name='secondName' class="form-control" id="inputPassword4" placeholder='Doe' />
                    <ValidationError
                        prefix="Email"
                        field="secondName"
                        errors={state.errors}
                    />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="email" name='email' class="form-control" id="inputAddress" placeholder="johndoe@gmail.com" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div class="col-12">
                    <label for="FeedBackForm">Give Feedback</label>
                    <textarea class="form-control" name='feedback' id="FeedBackForm" rows="3" placeholder='Best newsapp to ever exist...'></textarea>
                    <ValidationError
                        prefix="Email"
                        field="feedback"
                        errors={state.errors}
                    />
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary" disabled={state.submitting}>Send FeedBack</button>
                </div>
            </form>

        </>
    )
}

export default Feedback