import styled from '@emotion/styled';
import {useForm} from 'react-hook-form';

/**
 * form data
 * react-hook-form 사용
 */
const LoginForm = ({
										 onSubmit = (data) => console.log(data)
									 }) => {
	const {register, handleSubmit, formState: { isSubmitting, isDirty, errors }} = useForm();

	return (
		<LoginFormStyle>
			<p className={'title'}>로그인 페이지</p>
			<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor={'email'}>이메일</label>
				<input
					id={'email'}
					name={'email'}
					type={'text'}
					placeholder={'email'}
					className={'basic-input'}
					aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
					{...register("email", {
						required: "이메일은 필수 입력입니다.",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "이메일 형식에 맞지 않습니다.",
						},
					})}
				/>
				{errors.email && <small role="alert">{errors.email.message}</small>}
				<label htmlFor={'password'}>비밀번호</label>
				<input
					id={'password'}
					name={'password'}
					type={'password'}
					placeholder={'password'}
					className={'basic-input'}
					aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
					{...register("password", {
						required: "비밀번호는 필수 입력입니다.",
						minLength: {
							value: 8,
							message: "8자리 이상 비밀번호를 사용하세요.",
						},
					})}
				/>
				{errors.password && <small role="alert">{errors.password.message}</small>}
				<LoginBtn type={'submit'} disabled={isSubmitting}>로그인</LoginBtn>
			</form>
		</LoginFormStyle>
	);
};

const LoginFormStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -80%);

	.title {
		font-size: 24px;
		margin-bottom: 10px;
	}
	.form {
		display: flex;
		flex-direction: column;
	}
	.goto-signup {
		text-decoration: underline;
		margin-top: 10px;
		text-align: right;
	}
	.basic-input {
		width: 100%;
		height: 40px;
		border-radius: 8px;
		border: 1px solid #bbb;
		margin: 4px 0 20px;
		padding: 5px 10px;
	}
	.link {
		color: #fff;
	}
`;

export const LoginBtn = styled.button`
	min-width: 350px;
	height: 50px;
	color: white;
	background-color: teal;
	border-radius: 8px;
	border: none;
	background-color: ${(props) => (props.disabled ? 'gray' : 'teal')};
`;

export default LoginForm;

// 참고 블로그: https://www.daleseo.com/react-hook-form/
