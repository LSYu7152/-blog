import{_ as n,W as s,X as a,Y as e}from"./framework-d3c6dbde.js";const t="/img/java/oop/static.png",p={},c=e(`<h2 id="java中的類別與物件" tabindex="-1"><a class="header-anchor" href="#java中的類別與物件" aria-hidden="true">#</a> Java中的類別與物件</h2><h3 id="類別" tabindex="-1"><a class="header-anchor" href="#類別" aria-hidden="true">#</a> 類別</h3><p>在Java中，<strong>類別(class)</strong> 主要包含了 <strong>屬性</strong> 與 <strong>方法</strong> ，可以理解為屬性是類別中的變數，方法是類別中的函式。</p><p>我們可以通過不同型態的屬性以及包含不同行為的方法，將類別組成一個自定義的資料形式來使用。</p><h4 id="宣告類別的基本語法" tabindex="-1"><a class="header-anchor" href="#宣告類別的基本語法" aria-hidden="true">#</a> 宣告類別的基本語法</h4><div class="language-pseudocode line-numbers-mode" data-ext="pseudocode"><pre class="language-pseudocode"><code>[存取修飾詞] [修飾詞] class 類別名稱 [extends 父類別名稱] [implements 介面名稱, 第二個介面名稱...] {
    [存取修飾詞] [修飾詞] 資料型態 變數名稱1;
    [存取修飾詞] [修飾詞] 資料型態 變數名稱2;
    ...
    ..
    [存取修飾詞] [修飾詞] 回傳值資料型態 方法名稱1([參數宣告]) {
    		...
    }
    ...
    ..
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中存取修飾詞與修飾詞請見<a href="#java%E4%B8%AD%E7%9A%84%E5%AD%98%E5%8F%96%E4%BF%AE%E9%A3%BE%E8%A9%9E"><strong>Java中的存取修飾詞與非存取修飾詞</strong></a></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">// 定義 String型態的 name 變數</span>
  
    <span class="token comment">// 定義沒有回傳值的方法 bark()</span>
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; Bark!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="建構子" tabindex="-1"><a class="header-anchor" href="#建構子" aria-hidden="true">#</a> 建構子</h4><p>在類別中有一種特殊的方法叫做 <strong>建構子(Constructor)</strong> 建構子用於物件創建時賦予物件一些初始值做初始化的動作。在Java中 <strong>沒有建立建構子時會有一個預設的空建構子</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 沒有建構子時會有預設的空建構子</span>
    <span class="token comment">/*
    public Dog() {
    
    }
    */</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    <span class="token comment">// 長方形創建時必須要有長與寬</span>
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你同樣可以利用多載(Overloading)來定義多個建構子。</span>
        width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        height <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Rectangle</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// new的時候就會使用建構子來創建對應的物件</span>
        <span class="token comment">// 此處的5會傳入到建構子中的w, 3則會傳入到建構子中的h</span>
        <span class="token class-name">Rectangle</span> rect2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 使用沒有參數的建構子 width height都會被設定為1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="物件" tabindex="-1"><a class="header-anchor" href="#物件" aria-hidden="true">#</a> 物件</h3><p>依照類別去創建出來的實體即為 <strong>物件(object)</strong> ；在Java中，針對特定類別的物件我們又用 <strong>特定類別的實例(instance)</strong> 來稱呼，舉例來說：Dog的物件又被稱作 Dog的實例。</p><p>物件的建立分為兩個主要的部分：</p><ol><li>宣告變數</li><li>創建實體</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Dog</span> dog1<span class="token punctuation">;</span><span class="token comment">// 宣告Dog型態的變數 名為dog1</span>
        dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 通過new關鍵字於Heap中創建Dog型態的空間並將位置存回dog1</span>
        dog1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">;</span><span class="token comment">// 通過.name調用dog1中的屬性</span>
        <span class="token class-name">Dog</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dog2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">;</span>
        dog1<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 通過.bark()調用dog1中的方法 =&gt; 因為使用方法的物件為dog1 因此bark中的name會是dog1中的name值</span>
        dog2<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// output</span>
<span class="token comment">// -------------------</span>
<span class="token comment">// A Bark!!</span>
<span class="token comment">// B Bark!!</span>
<span class="token comment">// -------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h4><p>在Java的類別中時常會看到this，this指的是 <strong>當前所操作的物件實體</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//當方法中有與類別成員變數(屬性)相同名稱的變數時 會優先採用方法中的變數</span>
        <span class="token comment">//如果在這個情況下我們仍需要使用類別本身的成員變數，我們需要使用this來使用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token comment">// ↑成員變數     ↑方法的參數</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
        <span class="token comment">// 不同名稱時可以省略this，但就算省略了其實還是有隱含的this關鍵字</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Rectangle</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 創建長方形</span>
        rect<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 當rect呼叫了setWidth =&gt; setWidth中的this就會是rect</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java中的存取修飾詞與非存取修飾詞" tabindex="-1"><a class="header-anchor" href="#java中的存取修飾詞與非存取修飾詞" aria-hidden="true">#</a> Java中的存取修飾詞與非存取修飾詞</h2><h3 id="java中的存取修飾詞" tabindex="-1"><a class="header-anchor" href="#java中的存取修飾詞" aria-hidden="true">#</a> Java中的存取修飾詞</h3><p>Java中的存取修飾詞分別有四種，除了一般物件導向包含的三種權限以外還多了一種；Java通過不同的存取權限來實現封裝性。</p><table><thead><tr><th>存取修飾詞</th><th>同一類別</th><th>同一套件</th><th>不同套件的子類別</th><th>不同套件的非子類別</th></tr></thead><tbody><tr><td><strong>private</strong></td><td>OK</td><td></td><td></td><td></td></tr><tr><td><strong>default</strong>(無修飾詞)</td><td>OK</td><td>OK</td><td></td><td></td></tr><tr><td><strong>protected</strong></td><td>OK</td><td>OK</td><td>OK</td><td></td></tr><tr><td><strong>public</strong></td><td>OK</td><td>OK</td><td>OK</td><td>OK</td></tr></tbody></table><p>在使用上通常會配合封裝性，如下所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 改寫Dog類別</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">// 針對狗的名字我們設定為private 避免外部能直接修改名字</span>

    <span class="token comment">// 如果我們仍然有外部需要取出姓名的需求則提供一個方法讓使用Dog的人可取出姓名。請參考Getter/Setter</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果我們有需要外部能修改姓名的需求提供一個方法讓使用的人可設定姓名。請參考Getter/Setter</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 每一個狗都會叫</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 狗叫的行為內容</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; Bark!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getter-setter" tabindex="-1"><a class="header-anchor" href="#getter-setter" aria-hidden="true">#</a> Getter/Setter</h4><p>在物件導向中我們通常希望屬性不直接對外公開，而是通過間接存取的方式來使用屬性，方便我們能控制屬性在取出及設定時能加入限制或調整的空間；或是更進一步只提供取得或設定的方法。</p><p><strong>Getter</strong> 又稱作 <strong>Accessor</strong>，在使用上通常命名會遵循 <strong>getVariableName</strong> 的形式，用作讓外部取得特定變數的數值。</p><p><strong>Setter</strong> 又稱作 <strong>Mutator</strong>，在使用者通常命名會遵循 <strong>setVariableName</strong> 的形式，用作讓外部設定特定變數的數值。</p><h3 id="java中的非存取修飾詞" tabindex="-1"><a class="header-anchor" href="#java中的非存取修飾詞" aria-hidden="true">#</a> Java中的非存取修飾詞</h3><table><thead><tr><th>非存取修飾詞</th><th>用於</th></tr></thead><tbody><tr><td>static</td><td>靜態。用於類別方法與類別變數</td></tr><tr><td>final</td><td>禁止變數或方法再次變更。相當於常數化。</td></tr><tr><td>abstract</td><td>用於抽象類別與抽象方法上。 詳見 <a href="">抽象類別與介面</a></td></tr><tr><td>synchronized</td><td>執行緒同步。 詳見 <a href="">Java中的執行緒</a></td></tr></tbody></table><h4 id="static修飾詞" tabindex="-1"><a class="header-anchor" href="#static修飾詞" aria-hidden="true">#</a> static修飾詞</h4><p>靜態修飾詞的主要用途為創造類別方法以及類別變數。加上靜態修飾詞的變數，在Java中的記憶體會規劃至靜態域中；與一般的變數不同，被創建至靜態域的變數只會有一個實體，且在 <strong>程式執行的初期便產生，直到程式結束才會釋放</strong> 。</p><h5 id="靜態變數-類別變數" tabindex="-1"><a class="header-anchor" href="#靜態變數-類別變數" aria-hidden="true">#</a> 靜態變數/類別變數</h5><p>類別變數即在類別之中帶有靜態修飾詞的屬性，這些帶有靜態修飾詞的屬性會存放於靜態域。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">float</span> pi <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span><span class="token comment">// 圓周率</span>
    <span class="token comment">// 對於所有圓形來說他們只會有一個相同的圓周率</span>
    <span class="token comment">// 因此我們將pi宣告為static，這樣對於圓形來說，pi即為類別變數</span>
    <span class="token comment">// 也就是說 在程式一執行 pi的空間就被建立在靜態域，且被賦予一個值3.14</span>
    
    <span class="token keyword">private</span> <span class="token keyword">int</span> r<span class="token punctuation">;</span><span class="token comment">// 圓形的半徑</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Circle</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Circle</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        c1<span class="token punctuation">.</span>pi <span class="token operator">=</span> <span class="token number">3.5f</span><span class="token punctuation">;</span><span class="token comment">// 此時Circle中的pi被修改為3.5f</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span>pi<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 輸出 3.5</span>
        
        <span class="token class-name">Circle</span><span class="token punctuation">.</span>pi <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span><span class="token comment">// 因為pi的存在比實體創建來的更早，因此我們可以直接使用類別來找出他</span>
        
        <span class="token comment">// 從以上的範例可以理解到不管是哪一個圓形的實體來使用pi，都只會使用到位於靜態域中相同位置的pi而不會另外產生</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>記憶體配置</p><figure><img src="`+t+`" alt="類別變數記憶體配置" tabindex="0" loading="lazy"><figcaption>類別變數記憶體配置</figcaption></figure><h5 id="靜態方法-類別方法" tabindex="-1"><a class="header-anchor" href="#靜態方法-類別方法" aria-hidden="true">#</a> 靜態方法/類別方法</h5><p>類似於類別變數，類別方法也可以於實體被創建前便調用；也因此類別方法中是不能使用到非靜態屬性的(調用方法時並不一定有任何實體)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">float</span> pi <span class="token operator">=</span> <span class="token number">3.14f</span><span class="token punctuation">;</span><span class="token comment">// 圓周率改為private讓外部不能直接存取</span>
    
    <span class="token keyword">private</span> <span class="token keyword">int</span> r<span class="token punctuation">;</span><span class="token comment">// 圓形的半徑</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> r <span class="token operator">*</span> r <span class="token operator">*</span> pi<span class="token punctuation">;</span><span class="token comment">// 靜態變數可以在一般方法中被調用(一般方法被調用時，靜態變數必然已存在於記憶體中)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 這個靜態方法用來拿到pi的數值用來間接存取</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">float</span> <span class="token function">getPi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此處不能調用 r =&gt; 調用靜態方法時，並不一定會有實體</span>
        <span class="token keyword">return</span> pi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token function">getPi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 輸出:3.14</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="final修飾詞" tabindex="-1"><a class="header-anchor" href="#final修飾詞" aria-hidden="true">#</a> final修飾詞</h4><p>在Java中，final修飾字可以用於類別、方法、變數上；就如字面上所示，final修飾字的目的是讓該修飾內容不得再被修改。</p><h5 id="修飾類別" tabindex="-1"><a class="header-anchor" href="#修飾類別" aria-hidden="true">#</a> 修飾類別</h5><p>被final修飾的類別將不能被繼承。用於這個類別不希望外部再次改寫、擴充來變更功能時。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token comment">// 無法被繼承</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修飾方法" tabindex="-1"><a class="header-anchor" href="#修飾方法" aria-hidden="true">#</a> 修飾方法</h5><p>被final修飾的方法不能被覆寫(Override)。見 <a href="/java/4af597">Override與Overloading</a></p><p>對於部分可以被修改的類別來說final類別可能不是我們期望的，此時我們會利用final修飾部分方法來達到控制可以被修改的內容範圍。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">testFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此方法無法被覆寫</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;test function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修飾變數" tabindex="-1"><a class="header-anchor" href="#修飾變數" aria-hidden="true">#</a> 修飾變數</h5><p>final修飾的變數被創建並賦予初始值後，值就不能再被改變；因此在宣告變數時我們就必須給予初始值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 同時用final與static修飾 即靜態且不能改變的固定數值</span>
    
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 用final修飾並給予數值</span>
    
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> num3<span class="token punctuation">;</span><span class="token comment">// 特殊用法: 宣告時沒有給予數值，建構子中便一定要給予數值否則編譯將會錯誤</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num3 <span class="token operator">=</span> x<span class="token punctuation">;</span><span class="token comment">// 建構子中必須給予num3數值</span>
        <span class="token comment">// 此用法目的是可以通過建構子傳參來控制不同物件中的final變數數值</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// function中的參數也可以通過final修飾 即傳入後只能取值而不能再次被修改</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFunc</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">// 方法中的變數宣告也可以利用final修飾</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),o=[c];function i(l,u){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","index.html.vue"]]);export{r as default};
