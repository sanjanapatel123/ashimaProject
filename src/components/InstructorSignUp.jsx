import React from 'react'

function InstructorSignUp() {
  return (
    <div>
      <div class="container">
    <div class="form-signup">
        <h3 class="text-center mb-4" style={{color:"#047670"}}>Sign Up As Instructor</h3>
        
        
        <div class="social-buttons">
            <button class="btn btn-outline-primary mb-2" style="width:100%;"><i class="fa-brands fa-linkedin"></i> Sign Up with LinkedIn</button>
            <button class="btn btn-outline-danger mb-2" style="width:100%;"><img src='https://i.ibb.co/zhdcWpL0/google-logo-search-new-svgrepo-com.png'/> Sign Up with Google</button>
            <p class="text-center">Or Use Email</p>
        </div>

       
        <form>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email" required/>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" required/>
            </div>
            <div class="d-grid">
                <button class="btn btn-custom" type="submit" style={{backgroundColor:"#706D6E5E"}}>Sign Up</button>
            </div>
        </form>

        
        <p class="text-center form-text" style={{backgroundColor:"#047670"}}>
            By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
        </p>
        <p class="text-center">
            Already have an account? <a href="#">Log In</a>
        </p>
    </div>
</div>
    </div>
  )
}

export default InstructorSignUp
