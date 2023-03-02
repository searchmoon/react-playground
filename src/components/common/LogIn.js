import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import CommonInput from './CommonInput';

const initialValues = {
	account: '',
	email: '',
	password: '',
	OTP: '',
};
const validationSchema = Yup.object({
	account: Yup.string().required('Account Key is required'),
	email: Yup.string().max(2).required('Email is required'),
	password: Yup.string().required('Password is required'),
	OTP: Yup.string().required('OTP is required'),
});

const LogIn = () => {
	const handleSubmitForm = useCallback(() => {}, []);
	return (
		<WrapLoginStyle>
			<div className={'login-modal'}>
				<h2 className={'title'}>CoinHeim</h2>
				<div className={'login-box'}>
					<p>LOG IN</p>
					<span>로그인에 필요한 정보를 입력해 주세요.</span>
					{/*<CommonInput type={'text'} placeholder={'Account Key'}></CommonInput>*/}
					{/*<CommonInput type={'email'} placeholder={'Email'}></CommonInput>*/}
					{/*<CommonInput type={'password'} placeholder={'Password'}></CommonInput>*/}
					{/*<CommonInput type={'text'} placeholder={'OTP'}></CommonInput>*/}
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmitForm}
					>
						{({ handleSubmit }) => (
							<>
								<CommonInput
									type="text"
									name="account"
									placeholder="Account Key"
								/>
								<CommonInput type="email" name="email" placeholder="Email" />
								<CommonInput
									type="password"
									name="password"
									placeholder="Password"
								/>
								<CommonInput type="text" name="OTP" placeholder="OTP" />
								<button type={'button'} onClick={handleSubmit}>
									로그인
								</button>
							</>
						)}
					</Formik>
				</div>
			</div>
		</WrapLoginStyle>
	);
};

const WrapLoginStyle = styled.div`
	width: 100%;
	height: 100%;
	//background-color: #61dafb;
	//background: url('/images/login-bg.png') no-repeat;
	background-size: cover;
	position: relative;
	.login-modal {
		max-width: 700px;
		width: 100%;
		height: 1000px;
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.title {
		}
		.login-box {
			max-width: 446px;
			width: 100%;
			max-height: 586px;
			height: 100%;
			padding: 48px;
		}
	}
`;

export default LogIn;
