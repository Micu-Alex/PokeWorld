import { AbilityData } from "../hooks/useAbility";

export const getEnglishEffect = (ability: AbilityData) => {
    const englishEffect = ability.effect_entries.find(
      (entry) => entry.language.name === "en"
    );
    return englishEffect ? englishEffect.short_effect : "Effect not available.";
  };