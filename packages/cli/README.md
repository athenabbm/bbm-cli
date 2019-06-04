# bbm-cli

## Getting Started
```
npm install -g bbm-cli

```
package.json 添加配置
```
"bbm": {
  src: "",
  dest: ""
}
```
## Options
name|alias|type|Default|Description
--- |:--: |:--:| :--:  |---:
src | S   |string| language | 语言书写的目录
dest| D   |string| dest     | 语言生成的目录
cwd | C   |string| process.cwd() | 默认项目的根目录
diff| none|boolean| false | 是否强制diff，为true无论何时都会diff
force| -F |boolean| false | 是否强制生成，为true会跳过diff后直接覆盖

## commander
generate 别名 g

## example 

```
bbm generate // src指定的目录全部生成

bbm generate filename  // 指定src目录下filename的文件生成

```









