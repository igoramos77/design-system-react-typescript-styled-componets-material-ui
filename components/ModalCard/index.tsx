import React from 'react';

import { Container } from './styles';

interface IModalCardProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const ModalCard: React.FC<IModalCardProps> = ({children, size}) => {
  return (
    <Container size={size}>
      {children}
    </Container>
  );
}

export default ModalCard;