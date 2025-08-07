var size = 0;
var placement = 'point';

var style_DiagnsticoColetivodeDanos_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    var dano = typeof selectedDano !== 'undefined' ? selectedDano : null;
    var valor = dano ? feature.get(dano) : null;

    var fillColor = 'rgba(204, 204, 204, 0.7)'; // sem informação
    if (valor === 'Sim') {
        fillColor = 'rgba(0, 150, 0, 0.7)'; // presente
    } else if (valor === 'Não') {
        fillColor = 'rgba(200, 0, 0, 0.7)'; // ausente
    }

    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#000000',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: fillColor
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];
};
