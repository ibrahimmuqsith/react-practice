/* Shimmer comp acts like a placeholder or loader for whole comps */

const Shimmer = (props) => {
    const { cards = 8, width = 300, height = 250 } = props
    const items = Array.from({ length: cards })

    return (
        <div className="shimmer-container">
            {items.map((item, id) => (
                <div
                    key={id}
                    className="shimmer-card"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`
                    }}
                >
                </div>
            ))}
        </div >
    )
}

export default Shimmer