/**
 * Created by hoangnsh on 2/24/17.
 */
//if (SVG.supported) {
//    var draw = SVG('drawing')
//    var rect = draw.rect(100, 100)
//} else {
//    alert('SVG not supported')
//}
var div = document.getElementById('drawing')
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttributeNS(null, 'width', '100%')
svg.setAttributeNS(null, 'height', '100%')
div.appendChild(svg)
var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
rect.setAttributeNS(null, 'width', 100)
rect.setAttributeNS(null, 'height', 100)
rect.setAttributeNS(null, 'fill', '#f06')
svg.appendChild(rect);