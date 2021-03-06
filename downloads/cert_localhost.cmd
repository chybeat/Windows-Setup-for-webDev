@echo off
set file_path=C:\xampp\apache\conf\localhost
set cnf_file=%file_path%\openssl_chy.dev.cnf

IF EXIST %file_path%\. GOTO file_path_ok
md %file_path%

:file_path_ok

cls
echo.
echo.
echo Escribe los datos tal cual aparecen a la izquierda!
echo.---------------------------------------------------
echo.
echo.
echo.
echo.
echo. 
echo.
echo.

REM gen cnf file
ECHO HOME = . >%cnf_file%
ECHO RANDFILE = $ENV::HOME/.rnd >>%cnf_file%
ECHO oid_section = new_oids >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ new_oids ] >>%cnf_file%
ECHO tsa_policy1 = 1.2.3.4.1 >>%cnf_file%
ECHO tsa_policy2 = 1.2.3.4.5.6 >>%cnf_file%
ECHO tsa_policy3 = 1.2.3.4.5.7 >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ ca ] >>%cnf_file%
ECHO default_ca = CA_default >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ CA_default ] >>%cnf_file%
ECHO dir = ./demoCA >>%cnf_file%
ECHO certs = $dir/certs >>%cnf_file%
ECHO crl_dir = $dir/crl >>%cnf_file%
ECHO database = $dir/index.txt >>%cnf_file%
ECHO new_certs_dir = $dir/newcerts >>%cnf_file%
ECHO certificate = $dir/cacert.pem >>%cnf_file%
ECHO serial = $dir/serial >>%cnf_file%
ECHO crlnumber = $dir/crlnumber >>%cnf_file%
ECHO crl = $dir/crl.pem >>%cnf_file%
ECHO private_key = $dir/private/cakey.pem >>%cnf_file%
ECHO RANDFILE = $dir/private/.rand >>%cnf_file%
ECHO x509_extensions = usr_cert >>%cnf_file%
ECHO name_opt = ca_default >>%cnf_file%
ECHO cert_opt = ca_default >>%cnf_file%
ECHO copy_extensions = copy >>%cnf_file%
ECHO default_days = 365 >>%cnf_file%
ECHO default_crl_days = 365 >>%cnf_file%
ECHO default_md = default >>%cnf_file%
ECHO preserve = no >>%cnf_file%
ECHO policy = policy_match >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ policy_match ] >>%cnf_file%
ECHO countryName = match >>%cnf_file%
ECHO stateOrProvinceName = match >>%cnf_file%
ECHO organizationName = match >>%cnf_file%
ECHO organizationalUnitName = optional >>%cnf_file%
ECHO commonName = supplied >>%cnf_file%
ECHO emailAddress = optional >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ policy_anything ] >>%cnf_file%
ECHO countryName = optional >>%cnf_file%
ECHO stateOrProvinceName = optional >>%cnf_file%
ECHO localityName = optional >>%cnf_file%
ECHO organizationName = optional >>%cnf_file%
ECHO organizationalUnitName = optional >>%cnf_file%
ECHO commonName = supplied >>%cnf_file%
ECHO emailAddress = optional >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ req ] >>%cnf_file%
ECHO default_bits = 2048 >>%cnf_file%
ECHO default_keyfile = privkey.pem >>%cnf_file%
ECHO #distinguished_name = req_distinguished_name >>%cnf_file%
ECHO distinguished_name = dn >>%cnf_file%
ECHO attributes = req_attributes >>%cnf_file%
ECHO x509_extensions = v3_ca >>%cnf_file%
ECHO. >>%cnf_file%
ECHO input_password = secret >>%cnf_file%
ECHO output_password = secret >>%cnf_file%
ECHO string_mask = utf8only >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [req_distinguished_name] >>%cnf_file%
ECHO countryName = Country Name (2 letter code) >>%cnf_file%
ECHO countryName_default = AU >>%cnf_file%
ECHO countryName_min = 2 >>%cnf_file%
ECHO countryName_max = 2 >>%cnf_file%
ECHO. >>%cnf_file%
ECHO stateOrProvinceName = State or Province Name (full name) >>%cnf_file%
ECHO stateOrProvinceName_default = Some-State >>%cnf_file%
ECHO. >>%cnf_file%
ECHO localityName = Locality Name (eg, city) >>%cnf_file%
ECHO 0.organizationName = Organization Name (eg, company) >>%cnf_file%
ECHO 0.organizationName_default = Internet Widgits Pty Ltd >>%cnf_file%
ECHO organizationalUnitName = Organizational Unit Name (eg, section) >>%cnf_file%
ECHO commonName = Common Name (e.g. server FQDN or YOUR name) >>%cnf_file%
ECHO commonName_max = 64 >>%cnf_file%
ECHO emailAddress = Email Address >>%cnf_file%
ECHO emailAddress_max = 64 >>%cnf_file%
ECHO. >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ req_attributes ] >>%cnf_file%
ECHO challengePassword = A challenge password >>%cnf_file%
ECHO challengePassword_min = 4 >>%cnf_file%
ECHO challengePassword_max = 20 >>%cnf_file%
ECHO unstructuredName = An optional company name >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ usr_cert ] >>%cnf_file%
ECHO basicConstraints=CA:FALSE >>%cnf_file%
ECHO nsComment = "OpenSSL Generated Certificate" >>%cnf_file%
ECHO subjectKeyIdentifier=hash >>%cnf_file%
ECHO authorityKeyIdentifier=keyid,issuer >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ v3_req ] >>%cnf_file%
ECHO basicConstraints = CA:FALSE >>%cnf_file%
ECHO keyUsage = nonRepudiation, digitalSignature, keyEncipherment >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ v3_ca ] >>%cnf_file%
ECHO subjectAltName = @alternate_names >>%cnf_file%
ECHO subjectKeyIdentifier=hash >>%cnf_file%
ECHO authorityKeyIdentifier=keyid:always,issuer >>%cnf_file%
ECHO basicConstraints = CA:true >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ crl_ext ] >>%cnf_file%
ECHO authorityKeyIdentifier=keyid:always >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ proxy_cert_ext ] >>%cnf_file%
ECHO basicConstraints=CA:FALSE >>%cnf_file%
ECHO nsComment = "OpenSSL Generated Certificate" >>%cnf_file%
ECHO subjectKeyIdentifier=hash >>%cnf_file%
ECHO authorityKeyIdentifier=keyid,issuer >>%cnf_file%
ECHO proxyCertInfo=critical,language:id-ppl-anyLanguage,pathlen:3,policy:foo >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ tsa ] >>%cnf_file%
ECHO default_tsa = tsa_config1 # the default TSA section >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ tsa_config1 ] >>%cnf_file%
ECHO dir = ./demoCA >>%cnf_file%
ECHO serial = $dir/tsaserial >>%cnf_file%
ECHO crypto_device = builtin >>%cnf_file%
ECHO signer_cert = $dir/tsacert.pem >>%cnf_file%
ECHO certs = $dir/cacert.pem # Certificate chain to include in reply >>%cnf_file%
ECHO signer_key = $dir/private/tsakey.pem # The TSA private key (optional) >>%cnf_file%
ECHO. >>%cnf_file%
ECHO default_policy = tsa_policy1 # Policy if request did not specify it >>%cnf_file%
ECHO other_policies = tsa_policy2, tsa_policy3 # acceptable policies (optional) >>%cnf_file%
ECHO digests = md5, sha1 # Acceptable message digests (mandatory) >>%cnf_file%
ECHO accuracy = secs:1, millisecs:500, microsecs:100 # (optional) >>%cnf_file%
ECHO clock_precision_digits = 0 # number of digits after dot. (optional) >>%cnf_file%
ECHO ordering = yes # Is ordering defined for timestamps? >>%cnf_file%
ECHO tsa_name = yes # Must the TSA name be included in the reply? >>%cnf_file%
ECHO ess_cert_id_chain = no # Must the ESS cert id chain be included? >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [ alternate_names ] >>%cnf_file%
ECHO DNS.1 = localhost >>%cnf_file%
ECHO DNS.2 = 127.0.0.1 >>%cnf_file%
ECHO. >>%cnf_file%
ECHO [dn] >>%cnf_file%
ECHO C=CO >>%cnf_file%
ECHO ST = Cundinamarca >>%cnf_file%
ECHO L = Bogota >>%cnf_file%
ECHO O = localhost >>%cnf_file%
ECHO OU = Devs >>%cnf_file%
ECHO emailAddress = chybeat@gmail.com >>%cnf_file%
ECHO CN = localhost >>%cnf_file%

REM generar key & cert
c:
cd\xampp\apache\bin
openssl req -subj /C=CO/ST=Cundinamarca/L=Bogota/O=Webs_by_chy/OU=Devs/emailAddress=chybeat@gmail.com/CN=localhost -config %file_path%\openssl_chy.dev.cnf -new -x509 -sha512 -newkey rsa:2048 -nodes -keyout %file_path%\server.key -days 1825 -out %file_path%\server.crt

CLS
ECHO.
ECHO VERIFICAR EN C:\xampp\apache\conf\extra\httpd-ssl.conf:
ECHO ^<VirtualHost localhost:443^>
ECHO DocumentRoot "D:/dropbox/htdocs"
ECHO ServerName localhost:443
ECHO SSLCertificateFile "conf/localhost/server.crt"
ECHO SSLCertificateKeyFile "conf/localhost/server.key"
echo.
NOTEPAD C:\xampp\apache\conf\extra\httpd-ssl.conf
C:\xampp\apache\bin\httpd.exe -k restart
C:\xampp\apache\bin\httpd.exe -k stop
ECHO.
ECHO.
ECHO Instalar el certificado en "Equipo Local" en el almacen "Entidades de certificacion raiz de confianza"!!
ECHO.
ECHO.
explorer %file_path%\server.crt
C:\xampp\apache\bin\httpd.exe -k start
C:\xampp\apache\bin\httpd.exe -k restart
:quit
ECHO.
ECHO.
ECHO Terminado. Se ha creado el certificado para localhost
ECHO.
echo Reiniciar el navegador!
ECHO.
ECHO.
ECHO.
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL
pause > NUL