import "./scss/index.scss";
import { ConversionData } from "./interfaces/ConversionData";

function convertEurosToFrancs(data: ConversionData): void {
    data.francs = data.euros * data.conversionRate;
}

function convertFrancsToEuros(data: ConversionData): void {
    data.euros = data.francs / data.conversionRate;
}

document.addEventListener('DOMContentLoaded', () => {
    const eurosInput = document.getElementById('euros') as HTMLInputElement;
    const francsInput = document.getElementById('francs') as HTMLInputElement;
    const conversionRate = 0.93861; 

    eurosInput.addEventListener('input', () => {
        const euros = parseFloat(eurosInput.value);
        if (!isNaN(euros)) {
            const conversionData: ConversionData = {
                euros: euros,
                francs: 0, 
                conversionRate: conversionRate
            };
            convertEurosToFrancs(conversionData);
            francsInput.value = conversionData.francs.toFixed(2);
        } else {
            francsInput.value = '';
        }
    });

    francsInput.addEventListener('input', () => {
        const francs = parseFloat(francsInput.value);
        if (!isNaN(francs)) {
            const conversionData: ConversionData = {
                euros: 0,
                francs: francs,
                conversionRate: conversionRate
            };
            convertFrancsToEuros(conversionData);
            eurosInput.value = conversionData.euros.toFixed(2);
        } else {
            eurosInput.value = '';
        }
    });
});