# React STL Viewer

## New maintainer needed.

A React component for viewing an STL object from a given URL by utilizing Three.js

## Looking for contributors

See a <a href="http://chiedolabs.github.io/react-stl-viewer/" target="_blank">live demo here.</a>

*Note that you will still have to abide by the rules of CORS so you won't just be able to load a 3D file from someone else's site*

# Installation

	npm install stl-viewer

# Usage
	import STLViewer from 'stl-viewer'
	
	<STLViewer
   		model='http://www.example.com/example-url.stl'
    	width={400}
   		height={400}
    	modelColor='#B92C2C'
    	backgroundColor='#EAEAEA'
    	rotate={true}
    	orbitControls={true}
    	distance={10000}
  	/>

## Contributing

- If you test the building of the dist, please do not commit those files.

## Testing

- Build with `yarn run build`
- Run this in the root of the project folder `python -m SimpleHTTPServer 8000`
- Visit `http://0.0.0.0:8000` in your browser
