import React from 'react'

export default class Map extends React.Component {
    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
                <iframe title="map" src="/map.html" frameBorder="0" style={{
                    width: '100%',
                    height: '100%',
                }}>

                </iframe>
            </div>
        )
    }
}