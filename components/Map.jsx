const Map = () => {
  return (
    <div className="map_wrap" style={{ marginTop: 20 }}>
      <div
        className="map"
        style={{
          height: "400px",
          width: "100%",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid #E5E7EB",
        }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Bogotá%2C%20Colombia&t=m&z=12&output=embed&iwloc=near"
          title="Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
