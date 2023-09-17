import { useState } from 'react';
import { 
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {

        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            setFormFields(defaultFormFields);
        } catch (error) {

            if (error.code === 'auth/wrong-password') {

                alert('Incorrect password for email!');
            }

            switch (error.code) {

                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                case 'Incorrect password for email!':
                    alert('Incorrect password for email!');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (e) => {
        
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Email"
                    type="email" 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                    required
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                    required
                />

                <div className='buttons-container'>
                    <Button>Sign In</Button>
                    <Button 
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType='google'
                    >
                        Google sign in
                    </Button>
                </div>
                
            </form>
        </div>
    );
}

export default SignInForm;