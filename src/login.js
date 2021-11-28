
<body className="bg-gradient-login">
  <div className="container-login">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-12 col-md-9">
        <div className="card shadow-sm my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="login-form">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Ingreso sistema de Nómina</h1>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Ingrese su dirección de email"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                        <label className="custom-control-label" for="customCheck">Recuérdeme</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <a href="index.html" className="btn btn-primary btn-block">Login</a>
                    </div>
                    <hr></hr>
                    <a href="index.html" className="btn btn-google btn-block">
                      <i className="fab fa-google fa-fw"></i> Logearse con Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Logearse con Facebook
                    </a>
                  </form>
                  <hr></hr>
                  <div className="text-center">
                    <a className="font-weight-bold small" href="register.html">Crear una cuenta!</a>
                  </div>
                  <div className="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/ruang-admin.min.js"></script>
</body>