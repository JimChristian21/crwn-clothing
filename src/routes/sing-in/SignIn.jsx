import { 
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';


const SignIn = () => {

    const logGoogleUser = async () => {

        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
    }

    return (
        <div>
            <h1>Signin</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Popup
            </button>

            <SignUpForm />
        </div>
    );
}

export default SignIn;