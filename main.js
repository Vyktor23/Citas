let contPagina = 1;

function cambiarPantalla() {
  if (contPagina % 2 === 0) {
    document.getElementById('primeraParte').style.display = 'block';
    document.getElementById('segundaParte').style.display = 'none';
    contPagina += 1;
  } else {
    document.getElementById('primeraParte').style.display = 'none';
    document.getElementById('segundaParte').style.display = 'block';
    contPagina += 1;
  }
}

let citas = [];

function validarCita() {

  let nombreMascota = document.getElementById('nombre').value;
  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let tipoMascota = document.getElementById('tipo').value;
  let fecha = document.getElementById('fecha').value;
  let hora = document.getElementById('hora').value;
  let sintomas = document.getElementById('Síntomas').value;

  let fechaActual = new Date();
  let seleccionFecha = new Date(fecha);
  let horaMinima = new Date('1970-01-01T08:00:00');
  let horaMaxima = new Date('1970-01-01T17:00:00');
  let seleccionHora = new Date('1970-01-01T' + hora);

  if (nombreMascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '') {
    swal('Advertencia', 'Por favor, complete todos los campos.', 'warning');
    return;
  } else if (telefono.length < 10) {
    swal('Advertencia', 'El campo teléfono debe contener al menos 10 números.', 'warning');
    return;
  } else if (seleccionFecha <= fechaActual) {
    swal('Advertencia', 'La fecha para la cita debe ser posterior a la fecha actual.', 'warning');
    return;
  } else if (seleccionHora < horaMinima || seleccionHora > horaMaxima) {
    swal('Advertencia', 'La hora para la cita debe ser entre las 08:00 am y las 17:00 pm.', 'warning');
    return;
  } else {
    swal('¡Excelente!', 'Tu cita fue registrada correctamente.', 'success');

    const nuevaCita = {
      nombreMascota,
      propietario,
      telefono,
      tipoMascota,
      fecha,
      hora,
      sintomas
    };
    citas.push(nuevaCita);
    document.getElementById('mostrarLasCitas').innerHTML="";
    mostrarCita();
  }

  // window.location.href = './index.html';
  document.getElementById('citaFormulario').reset();
  console.log(citas)
  
}



function mostrarCita() {
  let tipoMascota = document.getElementById('tipo').value;

  let fragment = document.createDocumentFragment();
  citas.forEach((item, index) => {
    let dcard = document.createElement('div');
    let pnombre = document.createElement('p');
    let spannombre = document.createElement('span');
    let imagen = document.createElement('img');
    let ppropietario = document.createElement('p');
    let spanpropietario = document.createElement('span');
    let ptelefono = document.createElement('p');
    let spantelefono = document.createElement('span');
    let pmascota = document.createElement('p');
    let spanmascota = document.createElement('span');
    let pfecha = document.createElement('p');
    let spanfecha = document.createElement('span');
    let phora = document.createElement('p');
    let spanhora = document.createElement('span');
    let psintomas = document.createElement('p');
    let spansintomas = document.createElement('span');
    let botones = document.createElement('div');

    let bmodificar = document.createElement('button');
    let beliminar = document.createElement('button');
    let bfinalizar = document.createElement('button');

    if (item.tipoMascota == 'Perro') {
      imagen.src = "https://th.bing.com/th/id/R.c9c01b20d59b067d7aa5173165e398be?rik=UvJQOviuzYS9OQ&pid=ImgRaw&r=0";
    } else if (item.tipoMascota == 'Gato') {
      imagen.src = "https://th.bing.com/th/id/OIP.kgXLBni2DG-kIvhudI-4iQHaHQ?rs=1&pid=ImgDetMain";
    } else if (item.tipoMascota == 'Pájaro') {
      imagen.src = "https://th.bing.com/th/id/R.19d6a937fab9651426166e2d236b4105?rik=hF8uLFi%2biJIG5w&pid=ImgRaw&r=0";
    } else if (item.tipoMascota == 'Hamster') {
      imagen.src = "https://th.bing.com/th/id/OIP.san5bhNJs4Qh1BgFoMi6vwHaHa?w=209&h=209&c=7&r=0&o=5&pid=1.7";
    } else if (item.tipoMascota == 'Camaleón') {
      imagen.src = "https://th.bing.com/th/id/OIP.qwiAFDheomiu4FDUMreezAAAAA?w=214&h=193&c=7&r=0&o=5&pid=1.7";
    } else if (item.tipoMascota == 'Lagarto') {
      imagen.src = "https://th.bing.com/th/id/OIP.tGRHPJvvQ3Us_I1bjneF4QHaFp?w=250&h=190&c=7&r=0&o=5&pid=1.7";
    } else if (item.tipoMascota == 'Araña') {
      imagen.src = "https://th.bing.com/th/id/R.b121aae54de0a178f8646329686894c7?rik=39CnTxtz%2ft1%2bWg&pid=ImgRaw&r=0&sres=1&sresct=1";
    } else if (item.tipoMascota == 'Conejo') {
      imagen.src = "https://th.bing.com/th/id/OIP.ViVXHoBbw9JAoHpZjA7ioQHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7";
    } else if (item.tipoMascota == 'Pez') {
      imagen.src = "https://th.bing.com/th/id/OIP.-CTJnj3rASTriQekN_W-xQHaF_?w=223&h=180&c=7&r=0&o=5&pid=1.7";
    } else {
      imagen.src = "https://th.bing.com/th/id/OIP.oKpLwd5-O5AlX50ue-dZzQHaFL?w=282&h=196&c=7&r=0&o=5&pid=1.7";
    }

    pnombre.textContent = 'Nombre: ';
    spannombre.textContent = item.nombreMascota;
    ppropietario.textContent = 'Propietario: ';
    spanpropietario.textContent = item.propietario;
    ptelefono.textContent = 'Teléfono: ';
    spantelefono.textContent = item.telefono;
    pmascota.textContent = 'Tipo de Mascota: ';
    spanmascota.textContent = item.tipoMascota;
    pfecha.textContent = 'Fecha de la cita: ';
    spanfecha.textContent = item.fecha;
    phora.textContent = 'Hora de la cita: ';
    spanhora.textContent = item.hora;
    psintomas.textContent = 'Síntomas: ';
    spansintomas.textContent = item.sintomas;
    bmodificar.textContent = 'Modificar';
    beliminar.textContent = 'Eliminar';
    bfinalizar.textContent = 'Finalizar';

    pnombre.appendChild(spannombre);
    ppropietario.appendChild(spanpropietario);
    ptelefono.appendChild(spantelefono);
    pmascota.appendChild(spanmascota);
    pfecha.appendChild(spanfecha);
    phora.appendChild(spanhora);
    psintomas.appendChild(spansintomas);
    botones.appendChild(bmodificar);
    botones.appendChild(beliminar);
    botones.appendChild(bfinalizar);
    dcard.appendChild(pnombre);
    dcard.appendChild(imagen);
    dcard.appendChild(ppropietario);
    dcard.appendChild(ptelefono);
    dcard.appendChild(pmascota);
    dcard.appendChild(pfecha);
    dcard.appendChild(phora);
    dcard.appendChild(psintomas);
    dcard.appendChild(botones);
    fragment.appendChild(dcard);

    document.getElementById('mostrarLasCitas').appendChild(fragment);
  });
}






function modificarCita() {

}


function eliminarCita() {

}

function finalizarCita() {

}

function ordenarTiposCitas() {

}
