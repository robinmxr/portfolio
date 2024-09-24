import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
.social-media {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Space between icons */
  margin-top: 1rem;
}

.social-media a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5; /* Light grey background */
  color: #3f51b5; /* Primary color for icons */
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-media a:hover {
  background-color: #3f51b5; /* Primary color on hover */
  color: #fff; /* White color for icons on hover */
  transform: scale(1.1); /* Slightly enlarge the icon on hover */
}

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }


  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`