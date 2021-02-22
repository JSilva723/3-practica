import styled, {createGlobalStyle} from 'styled-components'
import colors from './colors'
const GlobalStyle = createGlobalStyle`
	body{
		background-color: ${colors.LightGray};
		font-family: 'Karla';
	}
`
const Main = styled.main`
	margin: 50px 20px;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 2px 2px 50px 1px ${colors.GrayishBlue};
	display: grid;
	grid-template-columns: repeat(1,1fr);
	@media screen and (min-width: 375px){
		margin: 50px 100px;
		grid-template-columns: repeat(2,1fr);
		grid-template-rows: repeat(2,1fr);
	}
`
const Section = styled.section`
	background-color: ${({bgcolor}) => bgcolor};
	color: black;
	padding: 15px;
	@media screen and (min-width: 375px){
		padding: 30px;
		grid-column: ${({gc}) => gc};
		grid-row: ${({gr}) => gr};
	} 
`
const Title = styled.h1`
	color: ${({color}) => color };
`
const SubTitle = styled.h2`
	color: ${({color}) => color };
`
const P = styled.p`
	color: ${({color}) => color };
	line-height: ${({lh}) => lh};
`
const Button = styled.button`
	padding: 15px 0;
	background-color: ${colors.BrightYellow};
	display: block;
	width: 100%;
	border: none;
	border-radius: 3px;
	margin-top: 25px;
`
const B = styled.b`
	color: #fff;
	font-size: ${({fz}) => fz};

`
const Span = styled.span`
	vertical-align: top;
	padding-left: 15px;
`
const App = () => {
  return (
  	<>
  		<GlobalStyle/>
  		<Main>
	  		
	  			<Section bgcolor={'#fff'} gr={'1'} gc={'1/3'}>
	  				<Title color={colors.Cyan}>Join our community</Title>
			  		<SubTitle color={colors.BrightYellow}>30-day, hassle-free money back guarantee</SubTitle>
			  		<P color={colors.GrayishBlue}>
			  			Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
			  		</P>
				</Section>
				<Section bgcolor={colors.Cyan}>
					<SubTitle color={'#fff'}>Monthly Subscription</SubTitle>
					<P lh={'30px'} color={colors.LightGray}>
						<B fz={'2rem'}>$29</B><Span>per month</Span><br/>Full access for less than $1 a day
					</P>
					<Button><B>Sign Up</B></Button>
				</Section>
				<Section bgcolor={colors.WCyan}>
				
					<SubTitle color={'#fff'}>Why Us</SubTitle>
					<P color={colors.LightGray}>
						Tutorials by industry experts<br/>Peer &amp; expert code review<br/>Coding exercises<br/>Access to our GitHub repos<br/>Community forum<br/>Flashcard decks<br/>New videos every week
					</P>
				
				</Section>
			
  		</Main>
  	</>	
  );
}
export default App;