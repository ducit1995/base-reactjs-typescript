import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../_actions';
import { userConstants, configConstants } from '../../../_constants';
import { ButtonFullW } from '../../../_components/Button';
import { InputGroup } from '../../../_components/Input';
import { Alert } from '../../../_components/Alert';
import { IAlertData } from '../../../_reducers/Alert/types';

function LoginContainer() {

    const alert: IAlertData = useSelector((state: any) => state.alert);
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const { username, password } = inputs;
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit() {
        if (validateParam()) {
            dispatch(userActions.login(inputs));
        }
    }

    function validateParam() {
        return (username && password) ? true : false;
    }

    return (
        configConstants.ENV === 'local' ?
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex content-center justify-center">
                    <div className="thumb-img my-10">
                        <img src="/images/login/mobile/female-worker-found-solution-of-problem.png" className="md:hidden" alt="female-worker-found-solution-of-problem" />
                        <img src="/images/login/welcom.png" className="hidden md:block" alt="welcom" />
                    </div>
                </div>
                <div className="md:w-500 md:mx-auto">
                    <h2 className="text-3xl font-extrabold text-center text-050B30 mb-12">Welcome back</h2>
                    {alert.message && alert.screen.includes(userConstants.SCREEN_LOGIN) && <Alert alert={alert} />}
                    <ButtonFullW className="w-full border-2 border-solid border-DDE7EE text-sm text-292A2F font-bold md:hidden" title="CONTINUE WITH GOOGLE" icon={'/images/icon/google-icon.png'} />
                    <div className="relative my-8 md:hidden">
                        <hr className="border-F5F8FB" />
                        <span className="bg-white text-sm font-semibold absolute centered-axis-xy px-2 pt-1.5 pb-2 text-A9B2C7 md:uppercase">or</span>
                    </div>
                    <InputGroup title="Email" titleReplace="Username" onChange={handleChange} name='username' />
                    <InputGroup title="Password" desc="Forgotten your password?" type={showPassword ? 'text' : 'password'} icon={{ link: showPassword ? '/images/icon/eye.png' : '/images/icon/eye-closed.png', onClick: () => setShowPassword(!showPassword) }} onChange={handleChange} name='password' />

                    <ButtonFullW title="LOG IN" className={'w-full text-sm text-white font-bold bg-0F76AF leading-12 mb-8 ' + (!validateParam() ? 'bg-gray-4 text-gray-40' : '')} onClick={handleSubmit} />
                    <div className="relative my-8 hidden md:block">
                        <hr className="border-F5F8FB" />
                        <span className="bg-white text-sm font-semibold absolute centered-axis-xy px-2 pt-1.5 pb-2 text-A9B2C7 md:uppercase">or</span>
                    </div>
                    <ButtonFullW className="w-full border-2 border-solid border-DDE7EE text-sm text-292A2F font-bold hidden mb-8 md:block" title="CONTINUE WITH GOOGLE" icon={'/images/icon/google-icon.png'} />
                    <div className="flex content-center justify-center md:hidden">
                        <div className="flex">
                            <a href="/" className="text-sm text-A9B2C7 font-bold mr-2">Privacy Policy</a>
                            <a href="/" className="text-sm text-A9B2C7 font-bold ml-2">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
            :
            <Fragment>

            </Fragment>
    );
}


export { LoginContainer };

