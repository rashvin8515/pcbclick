import { useNavigate } from "react-router-dom";
import useAuth from '../../../Context/AuthContext';
import api from "../../../Services/interceptor";
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '../../../@lodash';
import FuseSvgIcon from '../../../@fuse/core/FuseSvgicon';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import authService from "../../../Services/AuthService";
//import jwtService from '../../auth/services/jwtService';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const schema = yup.object().shape({
        email: yup.string().email('You must enter a valid email').required('You must enter a email'),
        password: yup
            .string()
            .required('Please enter your password.')
            .min(4, 'Password is too short - must be at least 4 chars.'),
    });
    const defaultValues = {
        email: '',
        password: '',
        remember: true,
    };

    const { control, formState, handleSubmit, setError, setValue } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });
    const { isValid, dirtyFields, errors } = formState;

    useEffect(() => {
        setValue('email', 'admin@fusetheme.com', { shouldDirty: true, shouldValidate: true });
        setValue('password', 'admin', { shouldDirty: true, shouldValidate: true });
    }, [setValue]);
    function onSubmit({ email, password }) {
        localStorage.setItem("isAuthed", true);
        authService.signInWithEmailAndPassword(email, password)
            .then(() => {
                login().then(() => {
                    navigate("/dashboard");
                });
            })

    }
    return (
        <div className="flex flex-col sm:flex-row items-center md:items-center  sm:justify-start md:justify-start flex-1 min-w-0">

            <Paper className="sm:h-screen md:flex md:items-center md:justify-end sm:w-auto md:h-screen md:w-1/2 sm:px-20 md:p-20 sm:rounded-2xl md:rounded-none sm:shadow w-full md:shadow-none">
                <div className="w-1/2 max-w-300 sm:w-100 mx-auto">
                    <img className="w-19" src="assets/images/logo/logo.svg" alt="logo" />
                    <div className="mt-10 text-4xl font-extrabold tracking-tight leading-tight">
                        Sign in
                    </div>

                    <form
                        name="loginForm"
                        noValidate
                        className="flex flex-col justify-center w-full mt-10"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="py-3">
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="w-20"
                                        label="Email"
                                        autoFocus
                                        type="email"
                                        error={!!errors.email}
                                        helperText={errors?.email?.message}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />
                                )}
                            />
                        </div>
                        <div className="py-3">
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 mt-20"
                                        label="Password"
                                        type="password"
                                        error={!!errors.password}
                                        helperText={errors?.password?.message}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />
                                )}
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center mt-3 sm:justify-between">
                            <Controller
                                name="remember"
                                control={control}
                                render={({ field }) => (
                                    <FormControl>
                                        <FormControlLabel
                                            label="Remember me"
                                            control={<Checkbox size="small" {...field} />}
                                        />
                                    </FormControl>
                                )}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:justify-between">
                            <Button
                                variant="contained"
                                color="secondary"
                                className=" w-full mt-10"
                                aria-label="Sign in"
                                disabled={_.isEmpty(dirtyFields) || !isValid}
                                type="submit"
                                size="large"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </Paper>

            <Box
                className="relative md:w-1/2 items-center hidden md:flex flex-auto justify-center h-screen px-20 py-60 lg:px-112 overflow-hidden"
                sx={{ backgroundColor: "#1f283b" }}
            >
                <svg
                    className="absolute inset-0 pointer-events-none"
                    viewBox="0 0 960 540"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMax slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Box
                        component="g"
                        sx={{ color: '#252e41' }}
                        //className="opacity-30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="100"
                    >
                        <circle r="230" cx="196" cy="23" />
                        <circle r="230" cx="790" cy="491" />
                    </Box>
                </svg>
                <Box
                    component="svg"
                    className="absolute -top-3 -right-5"
                    sx={{ color: '#334054' }}
                    viewBox="0 0 220 192"
                    width="220px"
                    height="192px"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </Box>

                <div className="z-10 relative w-full ">
                    <div className="text-5xl font-bold leading-none text-gray-100  ">
                        <div>Welcome to</div>
                        <div>our community</div>
                    </div>
                    <div className="mt-10 text-lg text-gray-400">
                        Fuse helps developers to build organized and well coded dashboards full of beautiful and
                        rich modules. Join us and start building your application today.
                    </div>
                </div>
            </Box>
        </div>
    );
};


export default Login;