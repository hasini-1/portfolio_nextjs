"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  weatherCode: number;
  isDay: number;
};

type WeatherType =
  | "sunny"
  | "cloudy"
  | "rain"
  | "storm"
  | "snow"
  | "night";

export default function WeatherBackground() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        console.log("User location:", latitude, longitude);

        try {
          const response = await fetch(
            `/api/weather?latitude=${latitude}&longitude=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch weather");
          }

          const data = await response.json();

          console.log("Weather data:", data);

          setWeather({
            temperature: data.current.temperature_2m,
            weatherCode: data.current.weather_code,
            isDay: data.current.is_day,
          });
        } catch (error) {
          console.error("Weather error:", error);
        }
      },
      (error) => {
        console.error("Location error:", error);
      }
    );
  }, []);

  /*
   * Convert Open-Meteo weather codes
   * into our visual weather types.
   */
  const getWeatherType = (): WeatherType => {
    if (!weather) {
      return "sunny";
    }

    const { weatherCode, isDay } = weather;

    // Night
    if (isDay === 0) {
      return "night";
    }

    // Thunderstorm
    if (weatherCode >= 95) {
      return "storm";
    }

    // Rain / drizzle / showers
    if (
      (weatherCode >= 51 && weatherCode <= 67) ||
      (weatherCode >= 80 && weatherCode <= 82)
    ) {
      return "rain";
    }

    // Snow
    if (weatherCode >= 71 && weatherCode <= 77) {
      return "snow";
    }

    // Cloudy
    if (weatherCode >= 1 && weatherCode <= 3) {
      return "cloudy";
    }

    // Clear
    return "sunny";
  };

  const weatherType = getWeatherType();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* ===================================================== */}
      {/* BASE BACKGROUND */}
      {/* ===================================================== */}

      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ${getBaseBackground(
          weatherType
        )}`}
      />

      {/* ===================================================== */}
      {/* SUNNY */}
      {/* ===================================================== */}

      {weatherType === "sunny" && <SunnyEffect />}

      {/* ===================================================== */}
      {/* CLOUDY */}
      {/* ===================================================== */}

      {weatherType === "cloudy" && <CloudyEffect />}

      {/* ===================================================== */}
      {/* RAIN */}
      {/* ===================================================== */}

      {weatherType === "rain" && <RainEffect />}

      {/* ===================================================== */}
      {/* SNOW */}
      {/* ===================================================== */}

      {weatherType === "snow" && <SnowEffect />}

      {/* ===================================================== */}
      {/* NIGHT */}
      {/* ===================================================== */}

      {weatherType === "night" && <NightEffect />}

      {/* ===================================================== */}
      {/* THUNDERSTORM */}
      {/* ===================================================== */}

      {weatherType === "storm" && <StormEffect />}

      {/* ===================================================== */}
      {/* DARK OVERLAY */}
      {/* ===================================================== */}

      <div className="absolute inset-0 bg-slate-950/10" />
      return (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

    {/* BASE BACKGROUND */}
    <div
      className={`absolute inset-0 transition-all duration-[2000ms] ${getBaseBackground(
        weatherType
      )}`}
    />

    {/* SUNNY */}
    {weatherType === "sunny" && <SunnyEffect />}

    {/* CLOUDY */}
    {weatherType === "cloudy" && <CloudyEffect />}

    {/* RAIN */}
    {weatherType === "rain" && <RainEffect />}

    {/* SNOW */}
    {weatherType === "snow" && <SnowEffect />}

    {/* NIGHT */}
    {weatherType === "night" && <NightEffect />}

    {/* THUNDERSTORM */}
    {weatherType === "storm" && <StormEffect />}

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-slate-950/10" />

    {/* WEATHER BADGE */}
    {weather && (
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/50 px-6 py-3 text-white shadow-2xl backdrop-blur-xl">

          <span className="text-2xl">
            {weatherType === "sunny" && "☀️"}
            {weatherType === "cloudy" && "☁️"}
            {weatherType === "rain" && "🌧️"}
            {weatherType === "snow" && "❄️"}
            {weatherType === "night" && "🌙"}
            {weatherType === "storm" && "⚡"}
          </span>

          <div>
            <p className="text-sm font-bold">
              {weatherType === "sunny" && "Sunny"}
              {weatherType === "cloudy" && "Cloudy"}
              {weatherType === "rain" && "Rainy"}
              {weatherType === "snow" && "Snow"}
              {weatherType === "night" && "Night"}
              {weatherType === "storm" && "Thunderstorm"}
            </p>

            <p className="text-xs text-slate-300">
              {weather.temperature}°C
            </p>
          </div>

        </div>
      </div>
    )}

  </div>
);
    </div>
  );
}


/* ========================================================= */
/* BASE BACKGROUNDS */
/* ========================================================= */

function getBaseBackground(type: WeatherType) {
  switch (type) {
    case "sunny":
      return "bg-gradient-to-br from-sky-400 via-sky-500 to-cyan-700";

    case "cloudy":
      return "bg-gradient-to-br from-sky-500 via-slate-500 to-slate-700";

    case "rain":
      return "bg-gradient-to-br from-slate-600 via-blue-800 to-slate-950";

    case "snow":
      return "bg-gradient-to-br from-slate-400 via-blue-300 to-slate-700";

    case "night":
      return "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950";

    case "storm":
      return "bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-950";

    default:
      return "bg-slate-950";
  }
}


/* ========================================================= */
/* SUNNY EFFECT */
/* ========================================================= */

function SunnyEffect() {
  return (
    <div className="absolute inset-0">

      {/* Sun glow */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-96
          w-96
          rounded-full
          bg-yellow-200/40
          blur-3xl
          animate-pulse
        "
      />

      {/* Sun */}
      <div
        className="
          absolute
          right-10
          top-20
          h-32
          w-32
          rounded-full
          bg-yellow-200
          shadow-[0_0_60px_20px_rgba(255,230,120,0.7)]
          sm:right-24
          sm:top-24
          sm:h-40
          sm:w-40
        "
      >

        {/* Sun rays */}
        <div className="absolute inset-[-45px] animate-spin-slow">

          <span className="absolute left-1/2 top-0 h-12 w-1 -translate-x-1/2 rounded-full bg-yellow-100/80" />

          <span className="absolute bottom-0 left-1/2 h-12 w-1 -translate-x-1/2 rounded-full bg-yellow-100/80" />

          <span className="absolute left-0 top-1/2 h-1 w-12 -translate-y-1/2 rounded-full bg-yellow-100/80" />

          <span className="absolute right-0 top-1/2 h-1 w-12 -translate-y-1/2 rounded-full bg-yellow-100/80" />

          <span className="absolute left-6 top-6 h-10 w-1 rotate-45 rounded-full bg-yellow-100/70" />

          <span className="absolute right-6 top-6 h-10 w-1 -rotate-45 rounded-full bg-yellow-100/70" />

          <span className="absolute bottom-6 left-6 h-10 w-1 -rotate-45 rounded-full bg-yellow-100/70" />

          <span className="absolute bottom-6 right-6 h-10 w-1 rotate-45 rounded-full bg-yellow-100/70" />

        </div>
      </div>

      {/* Soft sunlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/10 via-transparent to-cyan-950/20" />
    </div>
  );
}


/* ========================================================= */
/* CLOUDY EFFECT */
/* ========================================================= */

function CloudyEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div className="absolute left-[-10%] top-24 h-28 w-72 rounded-full bg-white/25 blur-xl animate-cloud" />

      <div className="absolute left-[25%] top-40 h-24 w-64 rounded-full bg-white/20 blur-xl animate-cloud-slow" />

      <div className="absolute right-[-10%] top-16 h-32 w-80 rounded-full bg-white/25 blur-xl animate-cloud" />

      <div className="absolute bottom-20 left-[-10%] h-40 w-96 rounded-full bg-slate-900/20 blur-3xl" />

      <div className="absolute inset-0 bg-white/5" />
    </div>
  );
}


/* ========================================================= */
/* RAIN EFFECT */
/* ========================================================= */

function RainEffect() {
  const drops = Array.from({ length: 90 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Dark rain atmosphere */}
      <div className="absolute inset-0 bg-blue-950/20" />

      {/* Rain drops */}
      {drops.map((_, index) => (
        <span
          key={index}
          className="absolute top-[-20px] h-16 w-[2px] rounded-full bg-blue-100/30 animate-rain"
          style={{
            left: `${(index * 17) % 100}%`,
            animationDelay: `${(index % 15) * 0.12}s`,
            animationDuration: `${0.7 + (index % 6) * 0.1}s`,
          }}
        />
      ))}

      {/* Rain glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/5 via-blue-900/10 to-slate-950/30" />
    </div>
  );
}


/* ========================================================= */
/* SNOW EFFECT */
/* ========================================================= */

function SnowEffect() {
  const snowflakes = Array.from({ length: 60 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {snowflakes.map((_, index) => (
        <span
          key={index}
          className="absolute top-[-20px] h-2 w-2 rounded-full bg-white/70 animate-snow"
          style={{
            left: `${(index * 23) % 100}%`,
            animationDelay: `${(index % 12) * 0.3}s`,
            animationDuration: `${4 + (index % 5)}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-white/5" />
    </div>
  );
}


/* ========================================================= */
/* NIGHT EFFECT */
/* ========================================================= */

function NightEffect() {
  const stars = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Moon glow */}
      <div
        className="
          absolute
          right-12
          top-20
          h-40
          w-40
          rounded-full
          bg-indigo-300/20
          blur-3xl
        "
      />

      {/* Moon */}
      <div
        className="
          absolute
          right-20
          top-28
          h-28
          w-28
          rounded-full
          bg-gradient-to-br
          from-white
          to-slate-300
          shadow-[0_0_50px_15px_rgba(180,190,255,0.3)]
          sm:right-32
          sm:top-32
          sm:h-36
          sm:w-36
        "
      >

        {/* Moon shadow creates crescent */}
        <div
          className="
            absolute
            -right-2
            -top-1
            h-32
            w-32
            rounded-full
            bg-indigo-950
            sm:h-40
            sm:w-40
          "
        />

      </div>

      {/* Stars */}
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 75}%`,
            width: `${index % 3 === 0 ? 3 : 2}px`,
            height: `${index % 3 === 0 ? 3 : 2}px`,
            animationDelay: `${(index % 10) * 0.2}s`,
          }}
        />
      ))}

      {/* Horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-950/70 to-transparent" />
    </div>
  );
}


/* ========================================================= */
/* THUNDERSTORM EFFECT */
/* ========================================================= */

function StormEffect() {
  const drops = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Storm clouds */}
      <div className="absolute left-[-10%] top-10 h-48 w-[60%] rounded-full bg-slate-950/60 blur-3xl" />

      <div className="absolute right-[-10%] top-20 h-56 w-[70%] rounded-full bg-slate-950/70 blur-3xl" />

      {/* Rain */}
      {drops.map((_, index) => (
        <span
          key={index}
          className="absolute top-[-20px] h-20 w-[2px] rounded-full bg-blue-100/25 animate-rain"
          style={{
            left: `${(index * 13) % 100}%`,
            animationDelay: `${(index % 10) * 0.1}s`,
            animationDuration: `${0.5 + (index % 5) * 0.1}s`,
          }}
        />
      ))}

      {/* Lightning */}
      <div className="absolute inset-0 animate-lightning bg-white/20 opacity-0" />

      <div className="absolute right-[20%] top-[20%] h-72 w-1 rotate-[18deg] bg-white/0 blur-sm" />

    </div>
    
  );
}