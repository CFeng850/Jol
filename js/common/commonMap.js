function getMap(id) {
    var map = new ol.Map({
        // 设置地图图层
        layers: [
            // 创建一个使用Open Street Map地图源的瓦片图层
            new ol.layer.Tile(
                {
                    source: new ol.source.OSM()//osm地图
                }
            )
        ],
        // 设置显示地图的视图
        view: new ol.View({
            center: [0, 0],    // 定义地图显示中心于经度0度，纬度0度处
            zoom: 2            // 并且定义地图显示层级为2
        }),
        // 让id为map的div作为地图的容器
        target: id
    });
    //实例化滑块
    var zoomlider = new ol.control.ZoomSlider();
    map.addControl(zoomlider);
    //实例化zoomToExtent
    var zoomToExtent = new ol.control.ZoomToExtent({
        extent:[13100000,4290000,13200000,5210000]
    });
    map.addControl(zoomToExtent);

}