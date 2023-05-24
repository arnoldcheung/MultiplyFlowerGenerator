function setupPunto(){
	puntoGraphics = createGraphics(width, height);
	initial_punto_r = puntoGraphics.min(width, height) * 0.7;
	punto_r = initial_punto_r;
	// drawPunto();
}

function drawPunto(){
	// puntoGraphics.fill(colorList[2]);
	// puntoGraphics.noStroke();	
	// puntoGraphics.ellipse(puntoGraphics.width / 2, puntoGraphics.height / 2, punto_r)
	
	// puntoGraphics.ellipse(puntoGraphics.width / 2, puntoGraphics.height / 2, 200, 200);
	
	sizeText.html(getTranslation("sizeInstruction") + floor(punto_r));

	if(ongoing){
		if (punto_r > 0){
			punto_r -= 0.5;
		}
		puntoGraphics.stroke(colorList[0] + '30');

	} else if(beginning){
		puntoGraphics.clear();
		puntoGraphics.stroke(colorList[0]);		
	} else {
		puntoGraphics.stroke(colorList[0] + '30');
	}

	
	puntoGraphics.noFill();
	puntoGraphics.strokeWeight(1);

	

	puntoGraphics.beginShape();



		for(let a=0; a<360; a++){

			let nx = 100 + noise_f_angle * cos(a);
			let ny = 100 + noise_f_angle * sin(a);

			let nf;
			
			// if(mod_func == 'perlin'){
				nf = noise(nx, ny, frameCount * noise_f_time);
			// } else if(mod_func == 'sine'){
			// 	nf = sin(a * noise_f_angle);
			// }
			
			let x = puntoGraphics.width / 2 + punto_r * cos(a) * nf;
			let y = puntoGraphics.height / 2 + punto_r * sin(a) * nf;
			puntoGraphics.curveVertex(x, y - buttonMenuHeight / 2);
		}
	puntoGraphics.endShape(CLOSE);


}