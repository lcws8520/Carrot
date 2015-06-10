/**
 * Created by Jeff on 15/6/10.
 */

var V = V || {};

//这里只做声明
V.winSize  = null;
V.w        = 0;
V.h        = 0;
V.w2       = 0;
V.h2       = 0;

V.soundState = true;
V.backgroundMusicState = false;
V.gameCenterState = false;
V.iCloudState = true;
V.discountNum = 6; // 敏感数据，放数据库[Sqlite]
//游戏解锁数量
V.GameDeblocking =10;  //

// 【TODO】 建议采用如下
var GC = GC || {};

GC.i18n = "en";         // 国际化
GC.SOUND_STATE 			= true;		// 开关[音效]
GC.MUSIC_STATE 		    = false;	// 开关[音乐]
GC.GAMECENTER_STATE 	= false;	// 说明
GC.ICLOUD_STATE 		= true;		// 说明
GC.DISCOUNT_NUM 		= 6;		// 说明
