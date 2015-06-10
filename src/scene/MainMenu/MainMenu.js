/**
 * Created by lingjianfeng on 15/5/12.
 */

var MainMenuLayer = cc.Layer.extend({
    backgroundLayer     : null,     // 背景层
    mainLayar           : null,     // 主层
    ctor : function () {
        this._super();
        // 加载[背景层]
        this.loadBackgroundLayer();
        // 加载[主层]
        this.loadMainLayer();

        return true;
    },
    loadBackgroundLayer : function(){
        this.backgroundLayer = new MMBackgroundLayer();
        this.addChild(this.backgroundLayer);
    },
    loadMainLayer : function(){
        this.mainLayar = new MMMainLayer();
        this.addChild(this.mainLayar);
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        // 记载[背景音乐]
        this.loadBackgroundMusic();

        var layer = new MainMenuLayer();
        this.addChild(layer);
    },
    loadBackgroundMusic : function (){
        if(V.MUSIC_STATE){
            if (cc.audioEngine.isMusicPlaying()){
                return;
            }
            cc.audioEngine.playMusic(res.BGMusic_mp3, true);
        }
    }
});