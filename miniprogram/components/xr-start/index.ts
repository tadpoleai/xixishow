Component({
    behaviors: [require('../common/share-behavior').default],
    properties: {
        markerImg: {
            type: String
        },
    },
    data: {
        loaded: false,
        arReady: false,
    },
    lifetimes: {
        attached() {
            console.log('data', this.data)
        }
    },
    methods: {
        handleReady({
            detail
        }) {
            const xrScene = this.scene = detail.value;
            console.log('xr-scene', xrScene);
        },
        handleAssetsProgress: function ({
            detail
        }) {
            console.log('assets progress', detail.value);
        },
        handleAssetsLoaded: function ({
            detail
        }) {
            console.log('assets loaded', detail.value);
            this.setData({
                loaded: true
            });
        },
        handleARReady: function ({
            detail
        }) {
            console.log('arReady');
            this.setData({
                arReady: true
            })
        }
    }
})