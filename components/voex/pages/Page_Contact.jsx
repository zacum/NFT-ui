import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Contact from '../components/new_component/ContactVoex';
import Footer from '../components/footer';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
const PageContact = () => {
	const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }

  .email-tag{
    font-weight: bold;
  }
  .social-icon{
    width: 20%;
    padding: 4px;
  }
  .margin-left-10{
    padding-left: 10%;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

	return (
		<>
			<div class='container'>
				<div class='col'>
					<GlobalStyles />
					<Contact />
					<div class='row'>
						<div class='col-md-6'>
							<label class='text-white mb-3'>
							Get in touch with us to learn more about this exciting marketplace for liberty.
							For more information you can leave us an email at: info@voex.io.

							Or leave a message below.

							</label>
							<div class='row'>
								<div class='col'>
									<label class='text-white'>First name</label>
									<input className='form-control bg-white' placeholder='Your firstname' type='text' />
								</div>
								<div class='col'>
									<label class='text-white'>Last name</label>
									<input className='form-control bg-white' placeholder='Your lastname' type='text' />
								</div>
							</div>
							<div class='row'>
								<div class='col'>
									<label class='text-white'>Phone</label>
									<input className='form-control bg-white' type='tel' placeholder='Your phone' />
								</div>
								<div class='col'>
									<label class='text-white'>Email</label>
									<input className='form-control bg-white' type='mail' placeholder='Your email' />
								</div>
							</div>
							<div class='row'>
								<div class='col'>
									<label class='text-white'>Your message</label>
									<textarea className='form-control bg-white' placeholder='Write your message'></textarea>
								</div>
							</div>
							<div class='row'>
								<div class='col'>
									<button class='btn-main'>Submit message</button>
								</div>
							</div>
						</div>
						<div class='col margin-left-10'>
							<div class='row text-center'>
								<div class='col'>
									<img src={instagram} class='social-icon' />
									<img src={twitter} class='social-icon' />
									<img src={facebook} class='social-icon' />
								</div>
							</div>
							<div class='row text-center'>
								<div class='col'>
									<label class='text-white email-tag'>info@voex.com</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PageContact;
