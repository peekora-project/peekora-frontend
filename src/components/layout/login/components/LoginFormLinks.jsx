import React from 'react'
const LoginFormLinks = () => {
  return (
    <>
                  <a className="small text-muted d-flex justify-content-center" href="#!">Forgot password?</a>
          <p className="mb-5 pb-lg-2 d-flex justify-content-center mt-1" style={{color: '#393f81', fontSize:'1rem'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

          <div className='d-flex flex-row justify-content-center last-content'>
            <a href="#!" className="small text-muted me-1  ">Terms of use.</a>
            <a href="#!" className="small text-muted">Privacy policy</a>
          </div>
    </>
  )
}

export default LoginFormLinks