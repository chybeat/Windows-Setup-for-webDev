#variable de descarga de ubuntu desde microsoft, si existe una uri mas actual, se puede actualizar
$uriForLinux = "https://aka.ms/wslubuntu2004"

If (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)){
  # Relaunch as an elevated process:
  Start-Process powershell.exe "-File",('"{0}"' -f $MyInvocation.MyCommand.Path) -Verb RunAs
  exit
}
$DesktopPath = [Environment]::GetFolderPath("Desktop")

cls;
function Show-txt($txt){
    Write-Host -ForegroundColor Yellow -BackgroundColor Black $txt
}

if($DesktopPath -ne $PSScriptroot){
    Show-txt("Se utilizará la carpeta del escritorio para guardar los archivos: " + $DesktopPath);
}

$restarted = Get-ItemPropertyValue -LiteralPath "Registry::HKEY_CURRENT_USER\SOFTWARE\wsl2" -Name "Restarted"  -ErrorAction SilentlyContinue

if(!$restarted){
    New-Item -Path "Registry::HKEY_CURRENT_USER\SOFTWARE\wsl2" -force | out-null
    Set-ItemProperty -LiteralPath "Registry::HKEY_CURRENT_USER\SOFTWARE\wsl2" -force -name "Restarted" -value "0" -type "string" -ErrorAction SilentlyContinue
    $restarted = 0;
}

if($restarted -eq "0"){
    #activación de WSL2 en Windows
    Show-txt("`nActivando Windows Susbsystem for linux");


    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart;

    #activación de las maquinas virtuales
    Show-txt("Activando la plataforma de Maquinas virtuales");
    Show-txt("Es necesario que desde la BIOS esté activa la opción de virtualización");

    cmd /c "BCDEDIT /Set {current} hypervisorlaunchtype auto"
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart;

    #reinicio de computador requerido
    Show-txt("Para continuar es necesario que reinicies el computador.");
    Show-txt("La activación de WSL2 continuará automáticamente al reiniciar...");
    pause

    #ectivacuión del paso 2 del script en el registro
    Set-ItemProperty -LiteralPath "Registry::HKEY_CURRENT_USER\SOFTWARE\wsl2" -force -name "Restarted" -value "1" -type "string" -ErrorAction SilentlyContinue

    #Ejecución automática del escript en el reinicio del computador
    $scriptFile = $MyInvocation.Mycommand.Source;
    Set-ItemProperty -Path "Registry::HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run" -Name "RunWSL2" -Value "powershell.exe -executionpolicy bypass -file `"$scriptFile`"" -Type ExpandString | Out-Null
    Show-txt("Comenzando el proceso de reinicio. Espera...")

    #ejecución del reinicio
    Start-Sleep -S 2
#    Restart-Computer -force
    exit
}else{
    Show-txt("`n`n`n`n`n`n`n`n`n`n`n`n`n`n`n`n`n`n`nContinación de activación de WSL2");
    Show-txt("Este script terminará automáticamente cuando las dependicas y archivos de WSL2 hayan sido terminadas y removidas");
    #actualización del kernel de WSL
    if(!(Get-Item -Path "$DesktopPath\wsl_update_x64.msi" -ErrorAction SilentlyContinue)){
        Show-txt("Descargando la actualización del Kernel de WSL v2...");
        Invoke-WebRequest -Uri https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi -OutFile $DesktopPath\wsl_update_x64.msi -UseBasicParsing;
    }

    Show-txt("Instalando el subsistema en la version 2");
    msiexec /i "$DesktopPath\wsl_update_x64.msi" /passive

    #activación de WSL2 en maquina virtual   
    Show-txt("Activando WSL2 como versión predeterminada");
    wsl --set-default-version 2 | Out-Null;

    #descarga y activación de Windows
    Show-txt("Activando Linux ($uriForLinux)");
    if(!(Get-Item -Path $DesktopPath\linux.appx -ErrorAction SilentlyContinue)){
        Show-txt("Descargando: $uriForLinux (~450.000.000 Bytes)");
        Invoke-WebRequest -Uri $uriForLinux -OutFile $DesktopPath\linux.appx -UseBasicParsing;
    }
    Add-AppxPackage "$DesktopPath\Linux.appx"
    start-sleep 5
    Show-txt("Terminado...");
    #limpieza de archivos y registro
    Remove-ItemProperty -Path "Registry::HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run" -Name "RunWSL2"
    Remove-Item -Path "Registry::HKEY_CURRENT_USER\SOFTWARE\wsl2" -force | out-null
    if((Get-Item -Path "$DesktopPath\wsl_update_x64.msi" -ErrorAction SilentlyContinue)){
       Remove-Item "$DesktopPath\wsl_update_x64.msi"
    }

    while(Get-Item -Path "$DesktopPath\linux.appx" -ErrorAction SilentlyContinue){
       Remove-Item "$DesktopPath\linux.appx" -Force
    }
}