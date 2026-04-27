export const playMenuEntrySound = async () => {
  const audio = new Audio("/sounds/menu-open.mp3");
  audio.preload = "auto";
  audio.volume = 0.9;

  try {
    await audio.play();
  } catch {
    // Ignore playback failures caused by missing files or browser policies.
  }
};
