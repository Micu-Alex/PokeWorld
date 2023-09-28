
export   default interface AbilityData {
    name: string;
    effect_entries: Array<{
        language: {
            name: string;
        };
        short_effect: string;
    }>;
}
