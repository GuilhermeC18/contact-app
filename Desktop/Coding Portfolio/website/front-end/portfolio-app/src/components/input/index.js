import styled from 'styled-components';

export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
	border: none;
	border-radius: 40px;
	padding: 20px;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
	background-color: ${(props) => {
		return props.done ? 'grey' : '';
	}};
`;