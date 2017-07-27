const e = window.DI.React.createElement;

const { SettingsSection, SettingsDivider, SettingsOptionTextbox, SettingsOptionFilebox,
    SettingsTitle, SettingsDescription } = window.DI.require('./Structures/Components');

class SettingsGeneral extends window.DI.React.Component {
    render() {
        return e('div', {},
            e(SettingsOptionFilebox, {
                title: 'CSS Path',
                description: 'This is the path to your css files. Can either be absolute, or relative to the CSS folder.',
                plugin: this.props.plugin,
                lsNode: 'cssPath',
                defaultValue: 'style.css',
                reset: true,
                apply: true,
                onApply: () => window.DI.CssInjector.refresh()
            }),
            e(SettingsDivider),
            e(SettingsOptionTextbox, {
                title: 'Custom Prefix',
                description: 'This is the prefix you\'ll use for custom commands.',
                plugin: this.props.plugin,
                lsNode: 'commandPrefix',
                defaultValue: '//',
                reset: true
            }),
            e(SettingsDivider),
            e(require('./SettingsSync'), { title: 'Settings Sync', plugin: this.props.plugin })
        );
    }
}

module.exports = SettingsGeneral;