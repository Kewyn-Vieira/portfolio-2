import styled from 'styled-components'
import Image from 'next/image'
import Button from '../components/buttons/Button'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import ButtonSecondary from '../components/buttons/ButtonSecondary'
import layout from '../components/layout'
let Container = layout.Container
let Row = layout.Row
let Column = layout.Column
let Section = layout.Section

import headers from '../components/headers'
let StyledH1 = headers.StyledH1
let StyledH2 = headers.StyledH2
let StyledH3 = headers.StyledH3
let StyledH4 = headers.StyledH4
let StyledH5 = headers.StyledH5

import post1 from '../../public/index/images/post1.png'
import post2 from '../../public/index/images/post2.png'
import post3 from '../../public/index/images/post3.png'
import post4 from '../../public/index/images/post4.png'
import user1 from '../../public/index/images/user1.jpg'
import user2 from '../../public/index/images/user2.jpg'
import user3 from '../../public/index/images/user3.jpg'
import phone from '../../public/index/images/phone.png'

let TextBox = styled.div`
    width: ${({width}) => width ? width : '60%'};
    margin: 32px 0;
    color: ${({color}) => color}
`

let StyledP = styled.p`
    width: ${({width}) => width};
    height: ${({height}) => height};
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    margin: ${({margin}) => margin};
    font-family: Montserrat;
    font-size: ${({fontSize}) => fontSize ? fontSize : '14px'};
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};

    @media(max-width: 608px)
    {
        text-align: ${({wrapTextAlign}) => wrapTextAlign}
    }
`

let APrimary = styled.a`
    color: ${({color, theme}) => color ? color : theme.colors.primary};
    text-decoration: none;
    font-weight: ${({fontWeight}) => fontWeight};
    font-size: ${({fontSize}) => fontSize};
    cursor: pointer;
`

let ASecondary = styled.a`
color: ${({color, theme}) => color ? color : theme.colors.textSecondary};
text-decoration: none;
font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '600'};
font-size: ${({fontSize}) => fontSize ? fontSize : '14px'};
cursor: pointer;
`

let StyledReview = styled.div`
    width: 256px;
    padding: 30px 35px;
    margin-bottom: 32px;
    border: 1px solid #dedede;
    border-radius: 5px;
`

function Review(props)
{
    return (
        <StyledReview>
            <div>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6711 7.41927C18.6134 7.24946 18.5073 7.10025 18.3658 6.99006C18.2243 6.87987 18.0537 6.81353 17.8749 6.79922L12.6458 6.38371L10.383 1.3747C10.3109 1.21337 10.1937 1.07634 10.0455 0.980156C9.89725 0.883971 9.72436 0.832739 9.54766 0.832642C9.37097 0.832545 9.19802 0.883587 9.0497 0.979609C8.90137 1.07563 8.78401 1.21253 8.71177 1.37378L6.44895 6.38371L1.2198 6.79922C1.04411 6.81314 0.876144 6.87738 0.736006 6.98425C0.595868 7.09113 0.489488 7.23612 0.429593 7.40187C0.369698 7.56762 0.358824 7.74712 0.398271 7.91889C0.437719 8.09066 0.525818 8.24743 0.652029 8.37044L4.51634 12.1375L3.14966 18.0555C3.10816 18.2347 3.12146 18.4221 3.18783 18.5936C3.2542 18.7651 3.37059 18.9127 3.52187 19.0172C3.67316 19.1217 3.85237 19.1783 4.03624 19.1797C4.22011 19.1811 4.40016 19.1272 4.55303 19.025L9.54737 15.6955L14.5417 19.025C14.6979 19.1288 14.8822 19.1822 15.0697 19.1781C15.2572 19.1739 15.4389 19.1125 15.5905 19.002C15.742 18.8916 15.8561 18.7373 15.9173 18.5601C15.9786 18.3828 15.9841 18.1911 15.9331 18.0106L14.2555 12.1403L18.4161 8.39612C18.6885 8.15031 18.7885 7.7669 18.6711 7.41927Z" fill="#F3CD03"/>
                </svg>
                <svg style={{marginLeft: '5px'}} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6711 7.41927C18.6134 7.24946 18.5073 7.10025 18.3658 6.99006C18.2243 6.87987 18.0537 6.81353 17.8749 6.79922L12.6458 6.38371L10.383 1.3747C10.3109 1.21337 10.1937 1.07634 10.0455 0.980156C9.89725 0.883971 9.72436 0.832739 9.54766 0.832642C9.37097 0.832545 9.19802 0.883587 9.0497 0.979609C8.90137 1.07563 8.78401 1.21253 8.71177 1.37378L6.44895 6.38371L1.2198 6.79922C1.04411 6.81314 0.876144 6.87738 0.736006 6.98425C0.595868 7.09113 0.489488 7.23612 0.429593 7.40187C0.369698 7.56762 0.358824 7.74712 0.398271 7.91889C0.437719 8.09066 0.525818 8.24743 0.652029 8.37044L4.51634 12.1375L3.14966 18.0555C3.10816 18.2347 3.12146 18.4221 3.18783 18.5936C3.2542 18.7651 3.37059 18.9127 3.52187 19.0172C3.67316 19.1217 3.85237 19.1783 4.03624 19.1797C4.22011 19.1811 4.40016 19.1272 4.55303 19.025L9.54737 15.6955L14.5417 19.025C14.6979 19.1288 14.8822 19.1822 15.0697 19.1781C15.2572 19.1739 15.4389 19.1125 15.5905 19.002C15.742 18.8916 15.8561 18.7373 15.9173 18.5601C15.9786 18.3828 15.9841 18.1911 15.9331 18.0106L14.2555 12.1403L18.4161 8.39612C18.6885 8.15031 18.7885 7.7669 18.6711 7.41927Z" fill="#F3CD03"/>
                </svg>
                <svg style={{marginLeft: '5px'}} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6711 7.41927C18.6134 7.24946 18.5073 7.10025 18.3658 6.99006C18.2243 6.87987 18.0537 6.81353 17.8749 6.79922L12.6458 6.38371L10.383 1.3747C10.3109 1.21337 10.1937 1.07634 10.0455 0.980156C9.89725 0.883971 9.72436 0.832739 9.54766 0.832642C9.37097 0.832545 9.19802 0.883587 9.0497 0.979609C8.90137 1.07563 8.78401 1.21253 8.71177 1.37378L6.44895 6.38371L1.2198 6.79922C1.04411 6.81314 0.876144 6.87738 0.736006 6.98425C0.595868 7.09113 0.489488 7.23612 0.429593 7.40187C0.369698 7.56762 0.358824 7.74712 0.398271 7.91889C0.437719 8.09066 0.525818 8.24743 0.652029 8.37044L4.51634 12.1375L3.14966 18.0555C3.10816 18.2347 3.12146 18.4221 3.18783 18.5936C3.2542 18.7651 3.37059 18.9127 3.52187 19.0172C3.67316 19.1217 3.85237 19.1783 4.03624 19.1797C4.22011 19.1811 4.40016 19.1272 4.55303 19.025L9.54737 15.6955L14.5417 19.025C14.6979 19.1288 14.8822 19.1822 15.0697 19.1781C15.2572 19.1739 15.4389 19.1125 15.5905 19.002C15.742 18.8916 15.8561 18.7373 15.9173 18.5601C15.9786 18.3828 15.9841 18.1911 15.9331 18.0106L14.2555 12.1403L18.4161 8.39612C18.6885 8.15031 18.7885 7.7669 18.6711 7.41927Z" fill="#F3CD03"/>
                </svg>
                <svg style={{marginLeft: '5px'}} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6711 7.41927C18.6134 7.24946 18.5073 7.10025 18.3658 6.99006C18.2243 6.87987 18.0537 6.81353 17.8749 6.79922L12.6458 6.38371L10.383 1.3747C10.3109 1.21337 10.1937 1.07634 10.0455 0.980156C9.89725 0.883971 9.72436 0.832739 9.54766 0.832642C9.37097 0.832545 9.19802 0.883587 9.0497 0.979609C8.90137 1.07563 8.78401 1.21253 8.71177 1.37378L6.44895 6.38371L1.2198 6.79922C1.04411 6.81314 0.876144 6.87738 0.736006 6.98425C0.595868 7.09113 0.489488 7.23612 0.429593 7.40187C0.369698 7.56762 0.358824 7.74712 0.398271 7.91889C0.437719 8.09066 0.525818 8.24743 0.652029 8.37044L4.51634 12.1375L3.14966 18.0555C3.10816 18.2347 3.12146 18.4221 3.18783 18.5936C3.2542 18.7651 3.37059 18.9127 3.52187 19.0172C3.67316 19.1217 3.85237 19.1783 4.03624 19.1797C4.22011 19.1811 4.40016 19.1272 4.55303 19.025L9.54737 15.6955L14.5417 19.025C14.6979 19.1288 14.8822 19.1822 15.0697 19.1781C15.2572 19.1739 15.4389 19.1125 15.5905 19.002C15.742 18.8916 15.8561 18.7373 15.9173 18.5601C15.9786 18.3828 15.9841 18.1911 15.9331 18.0106L14.2555 12.1403L18.4161 8.39612C18.6885 8.15031 18.7885 7.7669 18.6711 7.41927Z" fill="#F3CD03"/>
                </svg>
                <svg style={{marginLeft: '5px'}} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5319 12.1377L3.16522 18.0557C3.1229 18.2349 3.13561 18.4227 3.20168 18.5945C3.26775 18.7664 3.38411 18.9143 3.53557 19.0191C3.68703 19.1238 3.86655 19.1804 4.05068 19.1814C4.2348 19.1825 4.41498 19.1281 4.56767 19.0252L9.56201 15.6956L14.5564 19.0252C14.7126 19.1289 14.8968 19.1823 15.0843 19.1782C15.2718 19.1741 15.4536 19.1127 15.6051 19.0022C15.7567 18.8917 15.8707 18.7375 15.932 18.5602C15.9933 18.383 15.9988 18.1912 15.9478 18.0107L14.2702 12.1404L18.4308 8.39628C18.564 8.27629 18.6592 8.11988 18.7045 7.94638C18.7498 7.77289 18.7432 7.58992 18.6856 7.4201C18.6281 7.25029 18.522 7.10107 18.3805 6.99091C18.239 6.88075 18.0683 6.81448 17.8896 6.80029L12.6604 6.38386L10.3976 1.37485C10.3255 1.21356 10.2082 1.0766 10.0599 0.980493C9.91163 0.88439 9.73871 0.833252 9.56201 0.833252C9.38532 0.833252 9.2124 0.88439 9.06413 0.980493C8.91586 1.0766 8.79857 1.21356 8.72641 1.37485L6.4636 6.38386L1.23445 6.79937C1.05875 6.81329 0.890792 6.87753 0.750655 6.98441C0.610517 7.09128 0.504137 7.23627 0.444242 7.40202C0.384346 7.56777 0.373472 7.74727 0.41292 7.91904C0.452367 8.09081 0.540467 8.24758 0.666677 8.37059L4.5319 12.1377ZM7.14877 8.16972C7.31249 8.15682 7.46973 8.10012 7.604 8.00555C7.73827 7.91098 7.84462 7.78203 7.91191 7.63222L9.56201 3.98071L11.2121 7.63222C11.2794 7.78203 11.3858 7.91098 11.52 8.00555C11.6543 8.10012 11.8115 8.15682 11.9753 8.16972L15.6185 8.45865L12.6182 11.159C12.3577 11.3938 12.2541 11.7552 12.3495 12.0927L13.4988 16.1148L10.072 13.83C9.92159 13.729 9.74454 13.6751 9.56339 13.6751C9.38224 13.6751 9.20519 13.729 9.05478 13.83L5.4739 16.2175L6.437 12.0478C6.47231 11.8944 6.46757 11.7346 6.42323 11.5836C6.3789 11.4326 6.29646 11.2955 6.18384 11.1856L3.39728 8.46874L7.14877 8.16972Z" fill="#F3CD03"/>
                </svg>
            </div>
            <StyledP textAlign='left'>Slate helps you see how many more days you need to work to reach your financial goal.</StyledP>
            <Row justifyContent='flex-start' alignItems='center' height='51px'>
                <Image src={props.src} width='51' height='51' layout='fixed'/>
                <Column margin='0 0 0 16px' alignItems='flex-start' justifyContent='space-evenly' height='100%'>
                    <APrimary fontWeight='600' fontSize='14px' margin='0' textAlign='left'>Regina Miles</APrimary>
                    <StyledP margin='0' textAlign='left' fontWeight='bold' color={({theme}) => theme.colors.textPrimary}>Designer</StyledP>
                </Column>
            </Row>
        </StyledReview>
    )
}

let StyledNews = styled.div`
    width: 256px;
    height: 350px;
    margin-bottom: 32px;
`

function News(props)
{
    return(
        <StyledNews>
            <Column height='calc(100% - 40px)' color={({theme}) => theme.colors.textLight} alignItems='flex-start' justifyContent='flex-end' position='relative' padding='10px 20px'>
                <div style={{position: 'absolute', top:'0', left:'0', zIndex: '-1', filter: 'brightness(0.6)'}}>
                    <Image src={props.src} layout='fixed' width='256' height='350'></Image>
                </div>
                <StyledP textAlign='left'>Tax Management</StyledP>
                <StyledH4 color='inherit' textAlign='left' fontSize='20px' fontWeight='500'>Life Tips From Top Ten Adventure Travelers</StyledH4>
                <ButtonPrimary>View Project</ButtonPrimary>
            </Column>
        </StyledNews>
    )
}

let StyledPlan = styled.div`
    width: min-content;
    padding: 50px 40px;
    margin-bottom: 80px;
    border: 1px solid #dedede;
    border-radius: 10px;
    position: relative;

    &::before
    {
        content: 'New';
        width: 90px;
        height: 90px;

        display: ${({isNew}) => isNew ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -45px;
        right: 22.5px;

        color: ${({theme}) => theme.colors.textLight};
        font-size: 24px;
        font-weight: 700;

        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.alert}
    }
`

let ColorWrapper = styled.div`
    color: ${({color}) => color};
`

function Feature({title, isIncluded})
{
    return(
        <Row justifyContent='flex-start' alignItems='center' flexWrap='nowrap'>
            <ColorWrapper color={({theme}) => isIncluded ? theme.colors.success : theme.colors.muted}>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="32" height="32" rx="16" fill="currentColor"/>
                    <g clip-path="url(#clip0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                        <rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
                        </clipPath>
                    </defs>
                </svg>
            </ColorWrapper>
            <StyledP textAlign='left' fontWeight='600' margin='0 0 0 16px' width='max-content' color={({theme}) => theme.colors.textPrimary}>
                {title}
            </StyledP>
        </Row>
    )
}

function Plan({title, price, isNew})
{
    return(
        <StyledPlan isNew={isNew}>
            <StyledH3 margin='0 0 24px 0' fontSize='24px'>{title}</StyledH3>
            <StyledP fontWeight='700' fontSize='16px' margin='0 0 24px 0'>Organize across all apps by hand</StyledP>
            <div style={{marginBottom: '24px'}}>
                <StyledP margin='0' fontWeight='700' fontSize='40px' color={({theme}) => theme.colors.primary}>{price}$</StyledP>
                <StyledP margin='0' fontWeight='700' fontSize='16px' color={({theme}) => theme.colors.disabledElement}>Per Month</StyledP>
            </div>
            <ButtonSecondary width='100%' margin='0 0 24px 0'>Try for free</ButtonSecondary>
            <div style={{width: '248px'}}>
                <Feature title='Unlimited product updates' isIncluded={true}></Feature>
                <Feature title='Unlimited product updates' isIncluded={true}></Feature>
                <Feature title='Unlimited product updates' isIncluded={true}></Feature>
                <Feature title='1GB  Cloud storage' isIncluded={false}></Feature>
                <Feature title='Email and community support' isIncluded={false}></Feature>
            </div>
        </StyledPlan>
    )
}

let StyledUl = styled.ul`
    width: 280px;
    padding: 0;
    height: ${({height}) => height};
    display: flex;
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'wrap'};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'space-between'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'space-evenly'};
    list-style: none;
`

let StyledInput = styled.input`
    height: 100%;
    padding: 0 0 0 16px;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
`

export default function Home() {
    return (
        <div>
            <header style={{marginBottom: '64px'}}>
                <Section>
                    <Container padding='16px 0'>
                        <Row justifyContent='space-between' alignItems='center' flexWrap='nowrap'>
                            <StyledH3 margin='0' fontSize='24px'>BrandName</StyledH3>
                            <Row width='70%' justifyContent='space-between' flexWrap='nowrap'>
                                <StyledUl>
                                    <li>
                                        <ASecondary>
                                            Home
                                        </ASecondary>
                                    </li>
                                    <li>
                                        <ASecondary color={({theme}) => theme.colors.textSecondary} fontSize='14px' fontWeight='600'>
                                            Product
                                        </ASecondary>
                                    </li>
                                    <li>
                                        <ASecondary color={({theme}) => theme.colors.textSecondary} fontSize='14px' fontWeight='600'>
                                            Pricing
                                        </ASecondary>
                                    </li>
                                    <li>
                                        <ASecondary color={({theme}) => theme.colors.textSecondary} fontSize='14px' fontWeight='600'>
                                            Contact
                                        </ASecondary>
                                    </li>
                                </StyledUl>
                                <Row width='260px' flexWrap='nowrap' justifyContent='space-between' alignItems='center'>
                                    <APrimary fontSize='15px'>
                                        Login
                                    </APrimary>
                                    <ButtonSecondary>
                                        Become a member{' '}
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"/>
                                        </svg>
                                    </ButtonSecondary>
                                </Row>
                            </Row>
                        </Row>
                    </Container>
                </Section>
            </header>
            <Section>
                <Container position='relative'>
                    <div style={{overflow: 'hidden', position: 'absolute', top: '-10%', left: '-256px'}}>
                        <ColorWrapper color={({theme}) => theme.colors.disabledElement}>
                            <svg width="262" height="283" viewBox="0 0 262 283" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M214.679 250.654C186.497 282.333 143.534 294.45 99.3297 269.645C48.4615 241.102 3.54034 188.591 0.582652 130.519C-2.79907 64.1208 28.9275 8.14569 85.6735 1.51678C145.113 -5.42677 214.326 34.7346 248.903 101.511C279.079 159.786 248.575 212.551 214.679 250.654Z"/>
                            </svg>
                        </ColorWrapper>
                    </div>
                    <Row justifyContent='center'>
                        <Column width='50%' minWidth='256px' alignItems='flex-start' margin='0 0 32px 0'>
                            <TextBox width='92%'>
                                <StyledH1 textAlign='left' wrapTextAlign='center' fontSize='6.8vw' color={({theme}) => theme.colors.textDark}>Your Financial Assistance</StyledH1>
                                <StyledP textAlign='left' wrapTextAlign='center' fontSize='20px'>We know how large objects will act, but things on a small scale.</StyledP>
                            </TextBox>
                            <Row justifyContent='center'>
                                <ButtonPrimary margin='0 8px 16px 8px'>
                                    Get Quote Now
                                </ButtonPrimary>
                                <ButtonPrimary margin='0 8px 16px 8px' backgroundColor='transparent' color={({theme}) => theme.colors.primary}>
                                    Learn More
                                </ButtonPrimary>
                            </Row>
                        </Column>
                        <div style={{width: '50%', minWidth:'256px', position: 'relative'}}>
                            <div style={{width: '92%', position: 'absolute', top: '10%', right: '0'}}>
                                <ColorWrapper color={({theme}) => theme.colors.primary}>
                                    <svg width="100%" height="auto" viewBox="0 0 511 498" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M295.508 7.18213C398.642 28.5793 500.316 92.2052 509.669 207.237C519.296 325.624 435.037 427.18 333.539 474.895C238.508 519.57 131.07 498.109 64.3673 416.577C-4.13567 332.845 -22.2924 207.838 33.7893 108.506C87.9166 12.6364 197.001 -13.2549 295.508 7.18213Z"/>
                                    </svg>
                                </ColorWrapper>
                            </div>
                            <div style={{width: '92%', position: 'absolute', top: '10%', right: '0'}}>
                                <ColorWrapper color={({theme}) => theme.colors.disabledElement}>
                                    <svg width="100%" height="auto" viewBox="0 0 531 479" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M497.711 139.094C542.952 229.192 551.492 343.158 459.712 418.188C365.255 495.408 227.37 492.174 124.539 444.165C28.2597 399.214 -19.5713 305.847 8.5614 207.556C37.4535 106.612 132.28 19.0731 250.963 2.46222C365.509 -13.5698 454.5 53.0392 497.711 139.094Z" fill="#8EC2F2"/>
                                    </svg>
                                </ColorWrapper>
                            </div>
                            <div style={{width:'92%', float: 'right'}}>
                                <Image src={phone} layout='responsive'></Image>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Section>
            <Section backgroundColor={({theme}) => theme.colors.backgroundLight}>
                <Container>
                    <TextBox>
                        <StyledH2 fontSize='40px'>Better Strategy With Quality Business</StyledH2>
                        <StyledP>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </StyledP>
                    </TextBox>
                    <Row>
                        <ButtonSecondary width='30%' fontSize='16px' backgroundColor='#FAFAFA' borderColor='#E9E9E9'>
                            <Column>
                                <ColorWrapper color={({theme}) => theme.colors.primary}>
                                    <svg width="48" height="38" viewBox="0 0 48 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.917 37.6667C45.917 37.6667 49.0003 37.6667 49.0003 34.5556C49.0003 31.4445 45.917 22.1112 33.5837 22.1112C21.2503 22.1112 18.167 31.4445 18.167 34.5556C18.167 37.6667 21.2503 37.6667 21.2503 37.6667H45.917ZM21.3182 34.5556H45.8492C45.8636 34.5539 45.878 34.5518 45.8923 34.5494L45.917 34.5432C45.9108 33.7218 45.4021 31.3387 43.5737 29.192C41.8717 27.1791 38.8808 25.2223 33.5837 25.2223C28.2896 25.2223 25.2987 27.1823 23.5937 29.192C21.7652 31.3387 21.2534 33.7249 21.2503 34.5432C21.2729 34.5475 21.2955 34.5517 21.3182 34.5556ZM33.5837 15.8889C35.2192 15.8889 36.7877 15.2334 37.9441 14.0665C39.1006 12.8996 39.7503 11.3169 39.7503 9.66671C39.7503 8.01647 39.1006 6.43382 37.9441 5.26693C36.7877 4.10004 35.2192 3.44448 33.5837 3.44448C31.9482 3.44448 30.3796 4.10004 29.2232 5.26693C28.0667 6.43382 27.417 8.01647 27.417 9.66671C27.417 11.3169 28.0667 12.8996 29.2232 14.0665C30.3796 15.2334 31.9482 15.8889 33.5837 15.8889ZM42.8337 9.66671C42.8337 10.8924 42.5944 12.106 42.1295 13.2384C41.6647 14.3708 40.9833 15.3997 40.1244 16.2664C39.2655 17.133 38.2457 17.8205 37.1235 18.2896C36.0012 18.7586 34.7984 19 33.5837 19C32.3689 19 31.1661 18.7586 30.0438 18.2896C28.9216 17.8205 27.9019 17.133 27.0429 16.2664C26.184 15.3997 25.5026 14.3708 25.0378 13.2384C24.5729 12.106 24.3337 10.8924 24.3337 9.66671C24.3337 7.19135 25.3082 4.81738 27.0429 3.06704C28.7776 1.3167 31.1304 0.333374 33.5837 0.333374C36.0369 0.333374 38.3897 1.3167 40.1244 3.06704C41.8591 4.81738 42.8337 7.19135 42.8337 9.66671ZM21.053 22.9823C19.8196 22.5904 18.5482 22.3328 17.2605 22.2138C16.5369 22.1444 15.8105 22.1101 15.0837 22.1112C2.75033 22.1112 -0.333008 31.4445 -0.333008 34.5556C-0.333008 36.6307 0.693742 37.6667 2.75033 37.6667H15.7497C15.2926 36.6955 15.0646 35.6306 15.0837 34.5556C15.0837 31.4134 16.2461 28.2027 18.4445 25.5209C19.1937 24.6063 20.0663 23.7507 21.053 22.9823ZM14.837 25.2223C9.69399 25.2845 6.77408 27.2134 5.09366 29.192C3.25291 31.3512 2.75033 33.7436 2.75033 34.5556H12.0003C12.0003 31.3045 12.9962 28.0658 14.837 25.2223ZM4.29199 11.2223C4.29199 8.74691 5.26654 6.37294 7.00125 4.6226C8.73597 2.87226 11.0887 1.88893 13.542 1.88893C15.9952 1.88893 18.348 2.87226 20.0827 4.6226C21.8174 6.37294 22.792 8.74691 22.792 11.2223C22.792 13.6976 21.8174 16.0716 20.0827 17.8219C18.348 19.5723 15.9952 20.5556 13.542 20.5556C11.0887 20.5556 8.73597 19.5723 7.00125 17.8219C5.26654 16.0716 4.29199 13.6976 4.29199 11.2223ZM13.542 5.00004C11.9065 5.00004 10.338 5.65559 9.1815 6.82249C8.02503 7.98938 7.37533 9.57203 7.37533 11.2223C7.37533 12.8725 8.02503 14.4551 9.1815 15.622C10.338 16.7889 11.9065 17.4445 13.542 17.4445C15.1775 17.4445 16.746 16.7889 17.9025 15.622C19.059 14.4551 19.7087 12.8725 19.7087 11.2223C19.7087 9.57203 19.059 7.98938 17.9025 6.82249C16.746 5.65559 15.1775 5.00004 13.542 5.00004Z" fill="currentColor"/>
                                    </svg>
                                </ColorWrapper>
                                <StyledH5 margin='8px 0 0 0' fontSize='16px'>
                                    Support On Raising Funds
                                </StyledH5>
                            </Column>
                        </ButtonSecondary>
                        <ButtonSecondary width='30%' fontSize='16px'>
                            <Column>
                                <ColorWrapper color={({theme}) => theme.colors.textLight}>
                                    <svg width="48" height="38" viewBox="0 0 48 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.917 37.6667C45.917 37.6667 49.0003 37.6667 49.0003 34.5556C49.0003 31.4445 45.917 22.1112 33.5837 22.1112C21.2503 22.1112 18.167 31.4445 18.167 34.5556C18.167 37.6667 21.2503 37.6667 21.2503 37.6667H45.917ZM21.3182 34.5556H45.8492C45.8636 34.5539 45.878 34.5518 45.8923 34.5494L45.917 34.5432C45.9108 33.7218 45.4021 31.3387 43.5737 29.192C41.8717 27.1791 38.8808 25.2223 33.5837 25.2223C28.2896 25.2223 25.2987 27.1823 23.5937 29.192C21.7652 31.3387 21.2534 33.7249 21.2503 34.5432C21.2729 34.5475 21.2955 34.5517 21.3182 34.5556ZM33.5837 15.8889C35.2192 15.8889 36.7877 15.2334 37.9441 14.0665C39.1006 12.8996 39.7503 11.3169 39.7503 9.66671C39.7503 8.01647 39.1006 6.43382 37.9441 5.26693C36.7877 4.10004 35.2192 3.44448 33.5837 3.44448C31.9482 3.44448 30.3796 4.10004 29.2232 5.26693C28.0667 6.43382 27.417 8.01647 27.417 9.66671C27.417 11.3169 28.0667 12.8996 29.2232 14.0665C30.3796 15.2334 31.9482 15.8889 33.5837 15.8889ZM42.8337 9.66671C42.8337 10.8924 42.5944 12.106 42.1295 13.2384C41.6647 14.3708 40.9833 15.3997 40.1244 16.2664C39.2655 17.133 38.2457 17.8205 37.1235 18.2896C36.0012 18.7586 34.7984 19 33.5837 19C32.3689 19 31.1661 18.7586 30.0438 18.2896C28.9216 17.8205 27.9019 17.133 27.0429 16.2664C26.184 15.3997 25.5026 14.3708 25.0378 13.2384C24.5729 12.106 24.3337 10.8924 24.3337 9.66671C24.3337 7.19135 25.3082 4.81738 27.0429 3.06704C28.7776 1.3167 31.1304 0.333374 33.5837 0.333374C36.0369 0.333374 38.3897 1.3167 40.1244 3.06704C41.8591 4.81738 42.8337 7.19135 42.8337 9.66671ZM21.053 22.9823C19.8196 22.5904 18.5482 22.3328 17.2605 22.2138C16.5369 22.1444 15.8105 22.1101 15.0837 22.1112C2.75033 22.1112 -0.333008 31.4445 -0.333008 34.5556C-0.333008 36.6307 0.693742 37.6667 2.75033 37.6667H15.7497C15.2926 36.6955 15.0646 35.6306 15.0837 34.5556C15.0837 31.4134 16.2461 28.2027 18.4445 25.5209C19.1937 24.6063 20.0663 23.7507 21.053 22.9823ZM14.837 25.2223C9.69399 25.2845 6.77408 27.2134 5.09366 29.192C3.25291 31.3512 2.75033 33.7436 2.75033 34.5556H12.0003C12.0003 31.3045 12.9962 28.0658 14.837 25.2223ZM4.29199 11.2223C4.29199 8.74691 5.26654 6.37294 7.00125 4.6226C8.73597 2.87226 11.0887 1.88893 13.542 1.88893C15.9952 1.88893 18.348 2.87226 20.0827 4.6226C21.8174 6.37294 22.792 8.74691 22.792 11.2223C22.792 13.6976 21.8174 16.0716 20.0827 17.8219C18.348 19.5723 15.9952 20.5556 13.542 20.5556C11.0887 20.5556 8.73597 19.5723 7.00125 17.8219C5.26654 16.0716 4.29199 13.6976 4.29199 11.2223ZM13.542 5.00004C11.9065 5.00004 10.338 5.65559 9.1815 6.82249C8.02503 7.98938 7.37533 9.57203 7.37533 11.2223C7.37533 12.8725 8.02503 14.4551 9.1815 15.622C10.338 16.7889 11.9065 17.4445 13.542 17.4445C15.1775 17.4445 16.746 16.7889 17.9025 15.622C19.059 14.4551 19.7087 12.8725 19.7087 11.2223C19.7087 9.57203 19.059 7.98938 17.9025 6.82249C16.746 5.65559 15.1775 5.00004 13.542 5.00004Z" fill="currentColor"/>
                                    </svg>
                                </ColorWrapper>
                                <StyledH5 margin='8px 0 0 0' fontSize='16px'>
                                    Investment Trading
                                </StyledH5>
                            </Column>
                        </ButtonSecondary>
                        <ButtonSecondary width='30%' fontSize='16px' backgroundColor='#FAFAFA' color={({theme}) => theme.colors.primary} borderColor='#E9E9E9'>
                            <Column>
                                <ColorWrapper color={({theme}) => theme.colors.primary}>
                                    <svg width="48" height="38" viewBox="0 0 48 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.917 37.6667C45.917 37.6667 49.0003 37.6667 49.0003 34.5556C49.0003 31.4445 45.917 22.1112 33.5837 22.1112C21.2503 22.1112 18.167 31.4445 18.167 34.5556C18.167 37.6667 21.2503 37.6667 21.2503 37.6667H45.917ZM21.3182 34.5556H45.8492C45.8636 34.5539 45.878 34.5518 45.8923 34.5494L45.917 34.5432C45.9108 33.7218 45.4021 31.3387 43.5737 29.192C41.8717 27.1791 38.8808 25.2223 33.5837 25.2223C28.2896 25.2223 25.2987 27.1823 23.5937 29.192C21.7652 31.3387 21.2534 33.7249 21.2503 34.5432C21.2729 34.5475 21.2955 34.5517 21.3182 34.5556ZM33.5837 15.8889C35.2192 15.8889 36.7877 15.2334 37.9441 14.0665C39.1006 12.8996 39.7503 11.3169 39.7503 9.66671C39.7503 8.01647 39.1006 6.43382 37.9441 5.26693C36.7877 4.10004 35.2192 3.44448 33.5837 3.44448C31.9482 3.44448 30.3796 4.10004 29.2232 5.26693C28.0667 6.43382 27.417 8.01647 27.417 9.66671C27.417 11.3169 28.0667 12.8996 29.2232 14.0665C30.3796 15.2334 31.9482 15.8889 33.5837 15.8889ZM42.8337 9.66671C42.8337 10.8924 42.5944 12.106 42.1295 13.2384C41.6647 14.3708 40.9833 15.3997 40.1244 16.2664C39.2655 17.133 38.2457 17.8205 37.1235 18.2896C36.0012 18.7586 34.7984 19 33.5837 19C32.3689 19 31.1661 18.7586 30.0438 18.2896C28.9216 17.8205 27.9019 17.133 27.0429 16.2664C26.184 15.3997 25.5026 14.3708 25.0378 13.2384C24.5729 12.106 24.3337 10.8924 24.3337 9.66671C24.3337 7.19135 25.3082 4.81738 27.0429 3.06704C28.7776 1.3167 31.1304 0.333374 33.5837 0.333374C36.0369 0.333374 38.3897 1.3167 40.1244 3.06704C41.8591 4.81738 42.8337 7.19135 42.8337 9.66671ZM21.053 22.9823C19.8196 22.5904 18.5482 22.3328 17.2605 22.2138C16.5369 22.1444 15.8105 22.1101 15.0837 22.1112C2.75033 22.1112 -0.333008 31.4445 -0.333008 34.5556C-0.333008 36.6307 0.693742 37.6667 2.75033 37.6667H15.7497C15.2926 36.6955 15.0646 35.6306 15.0837 34.5556C15.0837 31.4134 16.2461 28.2027 18.4445 25.5209C19.1937 24.6063 20.0663 23.7507 21.053 22.9823ZM14.837 25.2223C9.69399 25.2845 6.77408 27.2134 5.09366 29.192C3.25291 31.3512 2.75033 33.7436 2.75033 34.5556H12.0003C12.0003 31.3045 12.9962 28.0658 14.837 25.2223ZM4.29199 11.2223C4.29199 8.74691 5.26654 6.37294 7.00125 4.6226C8.73597 2.87226 11.0887 1.88893 13.542 1.88893C15.9952 1.88893 18.348 2.87226 20.0827 4.6226C21.8174 6.37294 22.792 8.74691 22.792 11.2223C22.792 13.6976 21.8174 16.0716 20.0827 17.8219C18.348 19.5723 15.9952 20.5556 13.542 20.5556C11.0887 20.5556 8.73597 19.5723 7.00125 17.8219C5.26654 16.0716 4.29199 13.6976 4.29199 11.2223ZM13.542 5.00004C11.9065 5.00004 10.338 5.65559 9.1815 6.82249C8.02503 7.98938 7.37533 9.57203 7.37533 11.2223C7.37533 12.8725 8.02503 14.4551 9.1815 15.622C10.338 16.7889 11.9065 17.4445 13.542 17.4445C15.1775 17.4445 16.746 16.7889 17.9025 15.622C19.059 14.4551 19.7087 12.8725 19.7087 11.2223C19.7087 9.57203 19.059 7.98938 17.9025 6.82249C16.746 5.65559 15.1775 5.00004 13.542 5.00004Z" fill="currentColor"/>
                                    </svg>
                                </ColorWrapper>
                                <StyledH5 margin='8px 0 0 0' fontSize='16px'>
                                    Financial Analysis
                                </StyledH5>
                            </Column>
                        </ButtonSecondary>
                    </Row>
                </Container>
            </Section>
            <Section>
                <Container>
                    <TextBox>
                        <StyledH2>What Clients Say</StyledH2>
                        <StyledP>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </StyledP>
                    </TextBox>
                    <Row>
                        <Review src={user1}></Review>
                        <Review src={user2}></Review>
                        <Review src={user3}></Review>
                    </Row>
                </Container>
            </Section>
            <Section>
                <Column width='100%'>
                    <TextBox>
                        <StyledH2>Latest News</StyledH2>
                        <StyledP>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </StyledP>
                    </TextBox>
                    <Row>
                        <News src={post1}></News>
                        <News src={post2}></News>
                        <News src={post3}></News>
                        <News src={post4}></News>
                    </Row>
                </Column>
            </Section>
            <Section>
                <Container>
                    <TextBox>
                        <StyledH2>Pricing</StyledH2>
                        <StyledP>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </StyledP>
                    </TextBox>
                    <Row>
                        <Plan price='0' title='FREE'></Plan>
                        <Plan price='9.99' title='Silver' isNew={true}></Plan>
                        <Plan price='19.99' title='Gold'></Plan>
                    </Row>
                </Container>
            </Section>
            <Section backgroundColor={({theme}) => theme.colors.backgroundDark}>
                <Container padding='32px 0'>
                    <Row>
                        <TextBox color={({theme}) => theme.colors.textLight}>
                            <StyledH2 color={({theme}) => theme.colors.textLight} textAlign='left'>Get In Touch</StyledH2>
                            <StyledP textAlign='left' width='256px'>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th </StyledP>
                        </TextBox>
                        <div style={{height: '58px', margin: 'auto'}}>
                            <StyledInput placeholder='Your Email'></StyledInput>
                            <Button backgroundColor={({theme}) => theme.colors.primary} height='100%' padding='15px 25px' borderColor='#E5E5E5' borderRadius='0 5px 5px 0' fontWeight='400'>Subscribe</Button>
                        </div>
                    </Row>
                </Container>
            </Section>
            <footer>
                <Section>
                    <Container padding='32px 0'>
                        <Row justifyContent='space-between'>
                            <Column alignItems='flex-start'>
                                <StyledH3>Get In Touch</StyledH3>
                                <StyledP width='210px' textAlign='left'>the quick fox jumps over the lazy dog</StyledP>
                                <Row width='40%' justifyContent='space-between' flexWrap='nowrap'>
                                    <a style={{cursor: 'pointer'}}>
                                        <ColorWrapper color={({theme}) => theme.colors.primary}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z"/>
                                            </svg>
                                        </ColorWrapper>
                                    </a>
                                    <a style={{cursor: 'pointer'}}>
                                        <ColorWrapper color={({theme}) => theme.colors.primary}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 1C9.51488 1 9.1395 1.01375 7.96663 1.066C6.79375 1.121 5.99487 1.30525 5.295 1.5775C4.56088 1.85363 3.89593 2.28676 3.34663 2.84663C2.7871 3.39621 2.35402 4.06108 2.0775 4.795C1.80525 5.4935 1.61963 6.29375 1.566 7.4625C1.51375 8.63812 1.5 9.01213 1.5 12.0014C1.5 14.9879 1.51375 15.3619 1.566 16.5347C1.621 17.7063 1.80525 18.5051 2.0775 19.205C2.35938 19.9282 2.73475 20.5415 3.34663 21.1534C3.95713 21.7652 4.57037 22.142 5.29363 22.4225C5.99487 22.6947 6.79238 22.8804 7.96388 22.934C9.13813 22.9862 9.51213 23 12.5 23C15.4879 23 15.8605 22.9862 17.0347 22.934C18.2049 22.879 19.0065 22.6947 19.7064 22.4225C20.44 22.1462 21.1045 21.7131 21.6534 21.1534C22.2652 20.5415 22.6406 19.9282 22.9225 19.205C23.1934 18.5051 23.379 17.7063 23.434 16.5347C23.4862 15.3619 23.5 14.9879 23.5 12C23.5 9.01213 23.4862 8.63813 23.434 7.46388C23.379 6.29375 23.1934 5.4935 22.9225 4.795C22.646 4.06106 22.2129 3.39618 21.6534 2.84663C21.1042 2.28655 20.4392 1.85339 19.705 1.5775C19.0037 1.30525 18.2035 1.11963 17.0334 1.066C15.8591 1.01375 15.4865 1 12.4973 1H12.5014H12.5ZM11.5141 2.98275H12.5014C15.4384 2.98275 15.7863 2.99238 16.9454 3.046C18.0179 3.09413 18.6009 3.27425 18.9886 3.42412C19.5015 3.6235 19.8686 3.86275 20.2536 4.24775C20.6386 4.63275 20.8765 4.9985 21.0759 5.51275C21.2271 5.89913 21.4059 6.48213 21.454 7.55463C21.5076 8.71375 21.5186 9.06163 21.5186 11.9973C21.5186 14.9329 21.5076 15.2821 21.454 16.4412C21.4059 17.5138 21.2257 18.0954 21.0759 18.4831C20.8995 18.9607 20.618 19.3926 20.2522 19.7467C19.8672 20.1318 19.5015 20.3696 18.9873 20.569C18.6023 20.7203 18.0192 20.899 16.9454 20.9485C15.7863 21.0007 15.4384 21.0131 12.5014 21.0131C9.56438 21.0131 9.21513 21.0007 8.056 20.9485C6.9835 20.899 6.40188 20.7203 6.01412 20.569C5.53631 20.3929 5.10405 20.1119 4.74913 19.7467C4.38303 19.392 4.10112 18.9598 3.92412 18.4818C3.77425 18.0954 3.59413 17.5124 3.546 16.4399C3.49375 15.2808 3.48275 14.9329 3.48275 11.9945C3.48275 9.0575 3.49375 8.711 3.546 7.55187C3.5955 6.47937 3.77425 5.89638 3.9255 5.50863C4.12488 4.99575 4.36412 4.62862 4.74913 4.24362C5.13412 3.85862 5.49988 3.62075 6.01412 3.42138C6.40188 3.27013 6.9835 3.09138 8.056 3.04188C9.07075 2.99513 9.464 2.98138 11.5141 2.98V2.98275ZM18.3726 4.80875C18.1993 4.80875 18.0276 4.84289 17.8675 4.90923C17.7073 4.97557 17.5618 5.0728 17.4392 5.19537C17.3167 5.31794 17.2194 5.46346 17.1531 5.62361C17.0868 5.78376 17.0526 5.95541 17.0526 6.12875C17.0526 6.30209 17.0868 6.47374 17.1531 6.63389C17.2194 6.79404 17.3167 6.93956 17.4392 7.06213C17.5618 7.1847 17.7073 7.28193 17.8675 7.34827C18.0276 7.41461 18.1993 7.44875 18.3726 7.44875C18.7227 7.44875 19.0585 7.30968 19.306 7.06213C19.5536 6.81458 19.6926 6.47884 19.6926 6.12875C19.6926 5.77866 19.5536 5.44292 19.306 5.19537C19.0585 4.94782 18.7227 4.80875 18.3726 4.80875ZM12.5014 6.3515C11.7521 6.33981 11.008 6.47729 10.3123 6.75594C9.61671 7.0346 8.98346 7.44885 8.44946 7.97458C7.91546 8.50032 7.49138 9.12703 7.20191 9.81823C6.91244 10.5094 6.76336 11.2513 6.76336 12.0007C6.76336 12.7501 6.91244 13.4919 7.20191 14.1831C7.49138 14.8743 7.91546 15.5011 8.44946 16.0268C8.98346 16.5525 9.61671 16.9668 10.3123 17.2454C11.008 17.5241 11.7521 17.6616 12.5014 17.6499C13.9844 17.6267 15.3988 17.0214 16.4393 15.9645C17.4799 14.9076 18.0631 13.4839 18.0631 12.0007C18.0631 10.5175 17.4799 9.09382 16.4393 8.03691C15.3988 6.97999 13.9844 6.37464 12.5014 6.3515ZM12.5014 8.33288C13.474 8.33288 14.4067 8.71923 15.0944 9.40695C15.7821 10.0947 16.1685 11.0274 16.1685 12C16.1685 12.9726 15.7821 13.9053 15.0944 14.593C14.4067 15.2808 13.474 15.6671 12.5014 15.6671C11.5288 15.6671 10.596 15.2808 9.90833 14.593C9.22061 13.9053 8.83425 12.9726 8.83425 12C8.83425 11.0274 9.22061 10.0947 9.90833 9.40695C10.596 8.71923 11.5288 8.33288 12.5014 8.33288Z"/>
                                            </svg>
                                        </ColorWrapper>
                                    </a>
                                    <a style={{cursor: 'pointer'}}>
                                        <ColorWrapper color={({theme}) => theme.colors.primary}>
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.41075 19C16.713 19 21.2546 12.0731 21.2546 6.07669C21.2546 5.88285 21.2546 5.68625 21.2464 5.49241C22.1306 4.84789 22.8937 4.04993 23.5 3.13592C22.6741 3.50262 21.7988 3.7443 20.9026 3.85312C21.8466 3.28495 22.5536 2.391 22.8923 1.3374C22.0054 1.86647 21.0346 2.23787 20.0226 2.43534C19.3423 1.70572 18.4419 1.22237 17.4611 1.06016C16.4803 0.897946 15.4737 1.06592 14.5973 1.53807C13.7209 2.01023 13.0236 2.7602 12.6134 3.67182C12.2031 4.58345 12.1029 5.60585 12.3281 6.58066C10.5334 6.49005 8.77762 6.02057 7.17468 5.20269C5.57175 4.3848 4.15744 3.23678 3.0235 1.83307C2.44784 2.83421 2.27216 4.01843 2.53214 5.14526C2.79211 6.27209 3.46825 7.25705 4.42325 7.90013C3.70762 7.87565 3.00772 7.68215 2.38 7.33524V7.39754C2.38123 8.44631 2.74205 9.46247 3.40145 10.2743C4.06086 11.0861 4.9784 11.6438 5.999 11.853C5.61161 11.9605 5.21144 12.014 4.80963 12.0122C4.52635 12.0131 4.24365 11.9867 3.96537 11.9333C4.25383 12.8361 4.8155 13.6254 5.57171 14.1908C6.32793 14.7561 7.24081 15.0691 8.1825 15.0859C6.58276 16.3511 4.60668 17.0373 2.5725 17.034C2.21407 17.0355 1.85588 17.0147 1.5 16.9716C3.56458 18.297 5.96228 19.0008 8.41075 19Z"/>
                                            </svg>
                                        </ColorWrapper>
                                    </a>
                                </Row>
                            </Column>
                            <Column alignItems='flex-start'>
                                <StyledH3>Company Info</StyledH3>
                                <ASecondary>About Us</ASecondary>
                                <ASecondary>Carrier</ASecondary>
                                <ASecondary>We Are Hiring</ASecondary>
                                <ASecondary>Blog</ASecondary>
                            </Column>
                            <Column alignItems='flex-start'>
                                <StyledH3>Features</StyledH3>
                                <ASecondary>Business Marketing</ASecondary>
                                <ASecondary>User Analytic</ASecondary>
                                <ASecondary>Live Chat</ASecondary>
                                <ASecondary>Unlimited Support</ASecondary>
                            </Column>
                            <Column alignItems='flex-start'>
                                <StyledH3>Resources</StyledH3>
                                <ASecondary>IOS and Android</ASecondary>
                                <ASecondary>Watch a Demo</ASecondary>
                                <ASecondary>Customers</ASecondary>
                                <ASecondary>API</ASecondary>
                            </Column>
                        </Row>
                    </Container>
                </Section>
            </footer>
        </div>
    )
}
