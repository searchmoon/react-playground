import React from 'react';
import styled from '@emotion/styled';

const CommonInput = ({ type, placeholder }) => {
	return <InputStyle type={type} placeholder={placeholder}></InputStyle>;
};

const InputStyle = styled.input`
	width: 100%;
	border: 1px solid #e2e8f0;
	border-radius: 8px;
	padding: 15px 20px;
	&::placeholder {
		color: #a0aec0;
	}
`;
export default CommonInput;
