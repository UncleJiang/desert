import * as THREE from 'three'

import TimeText from './text.js'
import cubeFrame from './cubeFrame.js'

const timeGroup = new THREE.Group()

const timeText = new TimeText('majorTime').getRenderGroup()
timeGroup.add(timeText)

timeGroup.add(cubeFrame.mesh)

timeGroup.position.set(0, 19.4, 7.57)
timeGroup.rotateX(-0.0683133)
// timeGroup.scale.set(0.63, 0.63, 1)
timeGroup.scale.set(0.63, 0.63, 0.63)

const onGroupChange = () => {
    cubeFrame.onMeshChange()
}

export default {
    mesh: timeGroup,
    onMeshChange: onGroupChange,
}

