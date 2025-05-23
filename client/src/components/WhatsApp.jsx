import React from 'react';

const WhatsApp = () => {
  const whatsApp_container={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const whatsApp_text={
    color:'grey',
    fontSize:'1.3rem',
    fontWeight:'bold',
    }
  return (
    <>
      <div className='whatsApp-container' style={whatsApp_container}>
      
     
      <p  style={whatsApp_text}>لمزيد من المعلومات والمنتجات تواصل معنا على واتساب</p>
  
    <a
      href="https://wa.me/+96407813530010" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '10px',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '500',
        border: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 32 32"
        fill="white"
        style={{ marginRight: '10px' }}
      >
        <path d="M16.002 3.002c-7.166 0-12.998 5.832-12.998 13 0 2.287.61 4.518 1.762 6.482L3 29l6.697-1.738c1.904 1.043 4.05 1.588 6.305 1.588h.001c7.166 0 13-5.832 13-13s-5.834-13-13-13zm0 23.735c-1.969 0-3.898-.525-5.571-1.518l-.398-.236-3.975 1.031 1.06-3.873-.26-.399c-1.085-1.665-1.656-3.594-1.656-5.573 0-5.671 4.617-10.288 10.29-10.288 5.671 0 10.29 4.617 10.29 10.288 0 5.671-4.619 10.288-10.29 10.288zm5.624-7.736c-.308-.154-1.825-.901-2.108-1.002-.281-.104-.486-.154-.691.155-.204.308-.793 1.002-.971 1.207-.179.204-.358.231-.666.077-.308-.155-1.302-.48-2.48-1.531-.916-.817-1.535-1.828-1.713-2.136-.179-.308-.019-.474.135-.628.138-.137.308-.358.461-.537.154-.179.204-.308.308-.513.103-.205.051-.385-.026-.537-.077-.154-.691-1.667-.948-2.289-.25-.6-.504-.517-.691-.527l-.589-.01c-.204 0-.537.077-.818.385-.281.308-1.074 1.05-1.074 2.555s1.099 2.963 1.251 3.171c.154.205 2.167 3.309 5.247 4.637.733.317 1.303.507 1.748.651.734.233 1.403.2 1.93.121.589-.088 1.825-.745 2.083-1.463.256-.717.256-1.333.18-1.463-.077-.13-.282-.205-.59-.359z" />
      </svg>
      تواصل معنا
    </a>
      </div>
    </>
  );
};

export default WhatsApp;