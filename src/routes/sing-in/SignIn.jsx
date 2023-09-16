import { 
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import FormInput from '../../components/form-input/FormInput';
import { useState } from 'react';
import './sign-in.styles.scss';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logGoogleUser = async () => {

        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
    }

    const handleChange = (e) => {
        
        // const { name, value } = e.target;

        // setFormFields({
        //     ...formFields,
        //     [name]: value
        // });
    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <FormInput 
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />
            <FormInput 
                label="Password"
                type="password"
                name="email"
                value={password}
                onChange={handleChange}
                required
            />

            <SignUpForm />
        </div>
    );
}

export default SignIn;