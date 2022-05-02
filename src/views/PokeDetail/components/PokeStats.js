export default function PokeStats ({stats}){
    return (
        <>
        {stats?.map((value, index) => (
            <div key={index} >
            <p>{value.stat.name}</p>
            <p>{`: ${value.base_stat}%`}</p>
            </div>
        ))}
        </>
    );
}