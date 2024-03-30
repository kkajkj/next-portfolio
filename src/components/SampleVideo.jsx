"use client";

export default function SampleVideo({ youtubeData, youtubeUrl, id }) {
  return (
    <div key={id} style={{ textAlign: "center" }}>
      <iframe
        width="560"
        height="315"
        src={youtubeUrl}
        title={youtubeData?.[0].title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
