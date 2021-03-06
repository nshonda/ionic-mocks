export class ConfigMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Config', [
            'get',
            'getBoolean',
            'getNumber',
            'set',
            'settings',
            'setModeConfig',
            'getModeConfig',
            'setTransition',
            'getTransition'
        ]);

        instance.get.and.returnValue('');
        instance.getBoolean.and.returnValue(true);
        instance.getNumber.and.returnValue(0);

        return instance;
    }
}
