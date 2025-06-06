const CronGrammarVisitor = require('./generated/CronGrammarVisitor').default;

class CustomCronVisitor extends CronGrammarVisitor {
    visitSchedule(ctx) {
        if (ctx.predefined()) {
            return this.visit(ctx.predefined());
        }

        const timeFields = ctx.time_field();
        const fieldLabels = ['Minuto', 'Hora', 'Día del mes', 'Mes', 'Día de la semana'];
        let result = 'Programado:\n';

        for (let i = 0; i < timeFields.length; i++) {
            const fieldName = fieldLabels[i] || `Campo ${i + 1}`;
            const fieldText = this.visit(timeFields[i]);
            result += `${fieldName}: ${fieldText}\n`;
        }

        return result.trim();
    }

    visitPredefined(ctx) {
        return `Palabra clave: ${ctx.getText()}`;
    }

    visitValue(ctx) {
        return `${ctx.getText()}`;
    }

    visitRange(ctx) {
        const numbers = ctx.NUMBER();
        const from = numbers[0].getText();
        const to = numbers[1].getText();
        return `Del ${from} al ${to}`;
    }

    visitStep(ctx) {
        const base = this.visit(ctx.children[0]); // wildcard, range o value
        const step = ctx.NUMBER().getText();
        return `${base} cada ${step}`;
    }

    visitWildcard(ctx) {
        return '* (cualquier valor)';
    }

    visitList(ctx) {
        const items = ctx.item();
        const values = items.map(item => this.visit(item));
        return `Lista: [${values.join(', ')}]`;
    }

    visitItem(ctx) {
        return this.visit(ctx.children[0]); // delega en value, range o step
    }
}
module.exports = CustomCronVisitor;
