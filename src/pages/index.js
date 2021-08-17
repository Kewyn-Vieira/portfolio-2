import styled from 'styled-components'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import ButtonSecondary from '../components/buttons/ButtonSecondary'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
    return (
        <div>
            <ButtonPrimary>Primary Button</ButtonPrimary>
            <ButtonPrimary backgroundColor='white' color={({theme}) => theme.colors.primary}>Primary Button</ButtonPrimary>
            <ButtonSecondary>Secondary Button</ButtonSecondary>
            <ButtonSecondary backgroundColor='#FAFAFA' color={({theme}) => theme.colors.text} borderColor='#E9E9E9'>Secondary Button</ButtonSecondary>
        </div>
    )
}
