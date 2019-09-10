import { Gitgraph } from "@gitgraph/react"
import React from 'react'

const Clean = () => (
<Gitgraph>{(gitgraph) => {
    const master = gitgraph.branch('master')
    master.commit('Initial Commit')
    master.commit('Feature Release')

    const feature1 = master.branch('feature1')

    const feature = master.branch('feature_branch')
    feature.commit('FiX Formatted with Black')
    feature.commit('FEAT implemented feature into the project')
    master.merge(feature)


}}</Gitgraph>
)

export default Clean
