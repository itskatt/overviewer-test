var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld",
        "world - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1592214045",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "normal",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1592156492,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": [
                224,
                79,
                192
            ],
            "north_direction": 0
        },
        {
            "name": "Overworld flipped",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "normal-flipped",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1592156492,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": [
                224,
                79,
                192
            ],
            "north_direction": 2
        },
        {
            "name": "Caves",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "caves",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1592156492,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": [
                224,
                79,
                192
            ],
            "north_direction": 0
        },
        {
            "name": "Caves flipped",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "caves-flipped",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1592156492,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": [
                224,
                79,
                192
            ],
            "north_direction": 2
        },
        {
            "name": "Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - nether",
            "last_rendertime": 1566757658,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Nether flipped",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "nether-flipped",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - nether",
            "last_rendertime": 1566757658,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                224,
                79,
                192
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        }
    ]
};
