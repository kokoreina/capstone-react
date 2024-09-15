export function Cards({image,name,mota,score}) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top w-full" alt="..." />
        <div className="card-body ">
          <p className="card-text">
            {name}
          </p>
          <p className="card-text">
            {mota}
          </p>
          <p className="card-text">
            {score}
          </p>
        </div>
      </div>
    </>
  );
}
