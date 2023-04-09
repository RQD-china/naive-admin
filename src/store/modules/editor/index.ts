import { defineStore } from 'pinia'
import piniaPersistConfig from '../../piniaPersist'

export const useEditorStore = defineStore('editor-store', {
    state: (): Editor.Setting => ({
        value: `select supplier_name,city from
        (select * from suppliers join addresses on suppliers.address_id=addresses.id)
        as suppliers
        where supplier_id>500
        order by supplier_name asc,city desc;`,
        theme: 'vs',
    }),
    actions: {
        /** 设置编辑器内容 */
        setValue(value: string) {
            this.value = value
        },
        /** 设置编辑器主题 */
        setTheme(theme: string) {
            this.theme = theme
        },
    },
    persist: piniaPersistConfig('editor')
})
